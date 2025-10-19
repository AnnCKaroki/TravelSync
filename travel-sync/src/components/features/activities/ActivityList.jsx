import PropTypes from 'prop-types';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { Badge } from '../../ui/badge';
import { useTrips } from '../../../context/TripContext.jsx';
import { Activity, Plus, Clock, CheckCircle, Circle } from 'lucide-react';

/**
 * ActivityList shows activities for a specific trip. When tripId is missing,
 * it renders an informative empty state. Activities are persisted per-trip via TripContext.
 */
const ActivityList = ({ tripId }) => {
  const { getActivities, addActivity, updateActivity } = useTrips();
  const activities = tripId ? getActivities(tripId) : [];
  const [isAdding, setIsAdding] = useState(false);
  const [form, setForm] = useState({ title: '', description: '', time: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!tripId) return;
    if (!form.title.trim()) return;
    addActivity(tripId, form);
    setForm({ title: '', description: '', time: '' });
    setIsAdding(false);
  };

  const toggleActivityStatus = (activityId) => {
    if (!tripId) return;
    const activity = activities.find(a => a.id === activityId);
    if (activity) {
      const newStatus = activity.status === 'completed' ? 'planned' : 'completed';
      updateActivity(tripId, activityId, { ...activity, status: newStatus });
    }
  };

  // Empty state when no tripId provided
  if (!tripId) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Travel Activities
          </CardTitle>
          <CardDescription>
            Select a trip to view and manage activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Activity className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground">
              Choose a trip from your dashboard to start planning activities
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Travel Activities
            </CardTitle>
            <CardDescription>Plan and track your trip activities</CardDescription>
          </div>
          <Button
            onClick={() => setIsAdding(!isAdding)}
            size="sm"
            variant={isAdding ? "outline" : "default"}
          >
            <Plus className="h-4 w-4 mr-2" />
            {isAdding ? 'Cancel' : 'Add Activity'}
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {/* Add Activity Form */}
        {isAdding && (
          <Card className="mb-6">
            <CardContent className="pt-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="activity-title">Activity Title</Label>
                  <Input
                    id="activity-title"
                    placeholder="What do you want to do?"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="activity-time">Time (optional)</Label>
                  <Input
                    id="activity-time"
                    placeholder="e.g., 10:00 AM"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="activity-description">Description (optional)</Label>
                  <Textarea
                    id="activity-description"
                    placeholder="Add more details about this activity..."
                    rows={3}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsAdding(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Save Activity</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Activities List */}
        <div className="space-y-3">
          {activities.length === 0 ? (
            <div className="text-center py-8">
              <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">
                No activities planned yet. Add your first activity to get started!
              </p>
            </div>
          ) : (
            activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                {/* Status Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleActivityStatus(activity.id)}
                  className="mt-0.5 h-auto p-1"
                >
                  {activity.status === 'completed' ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                </Button>

                {/* Activity Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className={`font-medium ${
                      activity.status === 'completed'
                        ? 'line-through text-muted-foreground'
                        : 'text-foreground'
                    }`}>
                      {activity.title}
                    </h3>

                    <div className="flex items-center gap-2">
                      {activity.time && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {activity.time}
                        </Badge>
                      )}
                      <Badge
                        variant={activity.status === 'completed' ? 'default' : 'outline'}
                      >
                        {activity.status}
                      </Badge>
                    </div>
                  </div>

                  {activity.description && (
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

ActivityList.propTypes = {
  tripId: PropTypes.string,
};

export default ActivityList;
