import WeatherCard from '../components/features/weather/WeatherCard.jsx';
import NewsFeed from '../components/features/news/NewsFeed.jsx';
import ActivityList from '../components/features/activities/ActivityList.jsx';

/**
 * Main Dashboard page that serves as the container for all feature modules.
 * Displays weather, news, and activities in a responsive grid layout.
 */
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Your travel information at a glance
          </p>
        </div>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First column: Weather and News components */}
          <div className="space-y-6">
            <WeatherCard />
            <NewsFeed />
          </div>

          {/* Second column: Activities */}
          <div className="space-y-6">
            <ActivityList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
