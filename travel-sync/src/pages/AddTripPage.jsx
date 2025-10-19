import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Calendar from '../components/features/tripplanner/Calendar.jsx';
import { useTrips } from '../context/TripContext.jsx';
import { ArrowLeft, MapPin, Calendar as CalendarIcon } from 'lucide-react';

/**
 * AddTripPage component for planning new trips.
 * Features destination input and date selection.
 */
const AddTripPage = () => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState({ startDate: '', endDate: '' });
  const navigate = useNavigate();
  const { addTrip } = useTrips();

  const handleSubmit = (e) => {
    e.preventDefault();
    const created = addTrip({ destination, startDate: dates.startDate, endDate: dates.endDate, countryCode: 'us' });
    navigate(`/app/trips/${created.id}`);
  };

  const isFormValid = destination.trim() && dates.startDate && dates.endDate;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 -ml-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Plan a New Trip</h1>
            <p className="text-lg text-muted-foreground">Create your next adventure</p>
          </div>
        </div>

        {/* Form Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Trip Details
            </CardTitle>
            <CardDescription>
              Tell us where you're going and when you plan to travel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Input
                  id="destination"
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter destination (e.g., Paris, Tokyo, New York)"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  Travel Dates
                </Label>
                <Calendar onChange={(r) => setDates(r || { startDate: '', endDate: '' })} />
              </div>

              <Button
                type="submit"
                disabled={!isFormValid}
                className="w-full"
                size="lg"
              >
                Create Trip
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddTripPage;
