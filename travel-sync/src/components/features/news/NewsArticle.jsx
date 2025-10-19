import PropTypes from 'prop-types';

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
      className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
    >
      <img
        src={imageUrl}
        alt="Article thumbnail"
        className="w-16 h-16 rounded object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-sm line-clamp-2 mb-1">
          {title}
        </h3>
        <p className="text-gray-500 text-xs">
          {sourceName}
        </p>
      </div>
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
