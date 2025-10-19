import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'travel-sync.trips.v1';
const STORAGE_ACTIVITIES_KEY = 'travel-sync.activities.v1';

const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [trips, setTrips] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [activitiesByTrip, setActivitiesByTrip] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_ACTIVITIES_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
    } catch {}
  }, [trips]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_ACTIVITIES_KEY, JSON.stringify(activitiesByTrip));
    } catch {}
  }, [activitiesByTrip]);

  const addTrip = (trip) => {
    const id = crypto.randomUUID();
    const createdAt = Date.now();
    const normalized = {
      id,
      destination: String(trip.destination || '').trim(),
      startDate: trip.startDate || null,
      endDate: trip.endDate || null,
      countryCode: (trip.countryCode || 'us').toLowerCase(),
      createdAt,
    };
    setTrips((prev) => [normalized, ...prev]);
    return normalized;
  };

  const removeTrip = (id) => {
    setTrips((prev) => prev.filter((t) => t.id !== id));
    setActivitiesByTrip((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const getTrip = (id) => trips.find((t) => t.id === id) || null;

  const getActivities = (tripId) => activitiesByTrip[tripId] || [];

  const addActivity = (tripId, activity) => {
    const id = crypto.randomUUID();
    const newActivity = {
      id,
      title: String(activity.title || '').trim() || 'Untitled activity',
      description: activity.description || '',
      time: activity.time || '',
      status: activity.status || 'planned',
      createdAt: Date.now(),
    };
    setActivitiesByTrip((prev) => ({
      ...prev,
      [tripId]: [newActivity, ...(prev[tripId] || [])],
    }));
    return newActivity;
  };

  const updateActivity = (tripId, activityId, updates) => {
    setActivitiesByTrip((prev) => ({
      ...prev,
      [tripId]: (prev[tripId] || []).map((a) => (a.id === activityId ? { ...a, ...updates } : a)),
    }));
  };

  const removeActivity = (tripId, activityId) => {
    setActivitiesByTrip((prev) => ({
      ...prev,
      [tripId]: (prev[tripId] || []).filter((a) => a.id !== activityId),
    }));
  };

  const value = useMemo(
    () => ({ trips, addTrip, removeTrip, getTrip, getActivities, addActivity, updateActivity, removeActivity }),
    [trips, activitiesByTrip]
  );

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
};

export const useTrips = () => {
  const ctx = useContext(TripContext);
  if (!ctx) throw new Error('useTrips must be used within TripProvider');
  return ctx;
};

export default TripContext;


