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
      <Card>
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center space-x-3 animate-pulse">
              <div className="w-16 h-16 bg-gray-200 rounded"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
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
      <Card>
        <div className="text-red-500">Could not fetch news articles.</div>
      </Card>
    );
  }

  // News articles display with URL validation
  const validArticles = data?.filter(article => article.url) || [];
  if (validArticles.length > 0) {
    return (
      <Card>
        <h2 className="text-xl font-bold mb-4">Local News</h2>
        <div className="divide-y divide-gray-100">
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
