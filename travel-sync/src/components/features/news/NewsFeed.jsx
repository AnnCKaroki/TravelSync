import PropTypes from 'prop-types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import NewsArticle from './NewsArticle.jsx';
import { useNewsData } from '../../../hooks/useNewsData.js';
import { Newspaper, AlertCircle } from 'lucide-react';

/**
 * NewsFeed component that displays a list of top news headlines.
 * Features skeleton loading state and error handling.
 */
const NewsFeed = ({ region = 'us', city }) => {
  const { data, isLoading, isError } = useNewsData({ countryCode: region, query: city });

  // Skeleton loading state
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Newspaper className="h-5 w-5" />
            Latest News
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex items-center space-x-4 animate-pulse">
                <div className="w-12 h-12 bg-muted rounded-lg"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Error state
  if (isError) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            Latest News
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Could not fetch news articles. Please try again later.
          </p>
        </CardContent>
      </Card>
    );
  }

  // News articles display with URL validation
  const validArticles = data?.filter(article => article.url) || [];
  if (validArticles.length > 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Newspaper className="h-5 w-5" />
            Latest News
          </CardTitle>
          <CardDescription>Stay updated with current events</CardDescription>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
    );
  }

  // No articles found
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Newspaper className="h-5 w-5" />
          Latest News
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">No news articles available.</p>
      </CardContent>
    </Card>
  );
};

NewsFeed.propTypes = {
  region: PropTypes.string,
};

export default NewsFeed;
