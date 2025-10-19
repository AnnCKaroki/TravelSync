import PropTypes from 'prop-types';
import { Badge } from '../../ui/badge';
import { ExternalLink } from 'lucide-react';

/**
 * Presentational component that renders a single news article item.
 * Displays article image, title, and source name in a clickable layout.
 */
const NewsArticle = ({ title, sourceName, imageUrl, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
    >
      {imageUrl && (
        <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <Badge variant="secondary" className="text-xs">
            {sourceName}
          </Badge>
        </div>
      </div>

      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
    </a>
  );
};

NewsArticle.propTypes = {
  title: PropTypes.string.isRequired,
  sourceName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NewsArticle;
