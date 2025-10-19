import { useParams, useNavigate } from 'react-router-dom';
import { useTrips } from '../context/TripContext.jsx';
import WeatherCard from '../components/features/weather/WeatherCard.jsx';
import NewsFeed from '../components/features/news/NewsFeed.jsx';
import ActivityList from '../components/features/activities/ActivityList.jsx';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { AlertCircle, ArrowLeft } from 'lucide-react';

const TripDashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTrip } = useTrips();
  const trip = getTrip(id);

  if (!trip) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-lg font-semibold">Trip not found</h2>
              <p className="text-sm text-muted-foreground mt-1">
                It may have been removed or the link is invalid.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Derive inputs for modules
  const city = trip.destination;
  const region = (trip.countryCode || 'us').toLowerCase();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <header className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/app/trips')}
            className="mb-4 -ml-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Trips
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">{city}</h1>
          <p className="text-muted-foreground mt-2">
            {trip.startDate || 'TBD'} – {trip.endDate || 'TBD'}
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <WeatherCard city={city} />
            <NewsFeed region={region} city={city} />
          </div>
          <div className="space-y-6">
            <ActivityList tripId={trip.id} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default TripDashboard;
