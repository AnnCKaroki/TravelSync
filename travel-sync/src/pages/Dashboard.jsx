import WeatherCard from '../components/features/weather/WeatherCard.jsx';
import NewsFeed from '../components/features/news/NewsFeed.jsx';
import ActivityList from '../components/features/activities/ActivityList.jsx';

/**
 * Main Dashboard page that serves as the container for all feature modules.
 * Displays weather, news, and activities in a responsive grid layout.
 */
const Dashboard = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
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
  );
};

export default Dashboard;
