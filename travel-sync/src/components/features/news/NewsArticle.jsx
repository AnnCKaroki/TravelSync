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
      className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
    >
      <div className="w-16 h-16 flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-md"
          onError={(e) => {
            e.target.src = '/placeholder-image.png';
          }}
        />
      </div>
      <div className="min-w-0">
        <h3 className="truncate font-bold">
          {title}
        </h3>
        <p className="text-sm text-gray-500">
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
