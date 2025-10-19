import PropTypes from 'prop-types';
import Card from '../../common/Card.jsx';
import NewsArticle from './NewsArticle.jsx';
import { useNewsData } from '../../../hooks/useNewsData.js';

/**
 * NewsFeed component that displays a list of top news headlines.
 * Features skeleton loading state and error handling.
 */
const NewsFeed = ({ region = 'us' }) => {
  const { data, isLoading, isError } = useNewsData(region);

  // Skeleton loading state
  if (isLoading) {
    return (
      <Card className="bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="mb-6">
          <div className="h-8 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-xl w-32 animate-pulse"></div>
        </div>
        <div className="space-y-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center space-x-4 animate-pulse">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-2xl"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-lg w-3/4"></div>
                <div className="h-3 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-lg w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  // Error state
  if (isError) {
    return (
      <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-red-500 text-lg">📰</span>
          </div>
          <div className="text-red-600 font-medium">Could not fetch news articles</div>
        </div>
      </Card>
    );
  }

  // News articles display with URL validation
  const validArticles = data?.filter(article => article.url) || [];
  if (validArticles.length > 0) {
    return (
      <Card className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-emerald-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
            <span className="text-white text-lg font-bold">📰</span>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Latest News
          </h2>
        </div>
        <div className="space-y-4">
          {validArticles.slice(0, 3).map((article) => (
            <NewsArticle
              key={article.url}
              title={article.title || 'Untitled'}
              sourceName={article.source?.name || 'Unknown Source'}
              imageUrl={article.urlToImage || '/placeholder-image.png'}
              url={article.url}
            />
          ))}
        </div>
      </Card>
    );
  }

  // No articles found
  return (
    <Card>
      <div className="text-gray-500">No news articles available.</div>
    </Card>
  );
};

NewsFeed.propTypes = {
  region: PropTypes.string,
};

export default NewsFeed;
