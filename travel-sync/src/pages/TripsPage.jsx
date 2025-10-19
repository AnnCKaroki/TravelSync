import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useTrips } from '../context/TripContext.jsx';
import { Plus, MapPin, Calendar, Trash2 } from 'lucide-react';

const TripsPage = () => {
  const { trips, removeTrip } = useTrips();

  if (!trips.length) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto p-6">
          <div className="max-w-xl mx-auto text-center">
            <Card>
              <CardContent className="pt-6">
                <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                <h1 className="text-2xl font-bold mb-2">Plan your first trip</h1>
                <p className="text-muted-foreground mb-6">
                  Start by adding a destination and dates to begin your adventure.
                </p>
                <Button asChild>
                  <Link to="/app/add">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Trip
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">My Trips</h1>
              <p className="text-muted-foreground mt-2">
                Manage and explore your travel plans
              </p>
            </div>
            <Button asChild>
              <Link to="/app/add">
                <Plus className="h-4 w-4 mr-2" />
                Add Trip
              </Link>
            </Button>
          </div>

          <div className="grid gap-4">
            {trips.map((trip) => (
              <Card key={trip.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/app/trips/${trip.id}`}
                      className="flex-1 min-w-0"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold truncate">
                            {trip.destination}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {trip.startDate || 'TBD'} - {trip.endDate || 'TBD'}
                            </span>
                          </div>
                          <Badge variant="secondary" className="mt-2">
                            {trip.countryCode?.toUpperCase() || 'Unknown'}
                          </Badge>
                        </div>
                      </div>
                    </Link>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        if (confirm(`Delete trip to ${trip.destination}?`)) {
                          removeTrip(trip.id);
                        }
                      }}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripsPage;
