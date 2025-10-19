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
      className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-teal-50/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100/50"
    >
      <div className="w-18 h-18 flex-shrink-0 relative overflow-hidden rounded-2xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.src = '/placeholder-image.png';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-slate-700 group-hover:text-emerald-700 line-clamp-2 leading-tight transition-colors duration-300">
          {title}
        </h3>
        <div className="flex items-center space-x-2 mt-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
          <p className="text-sm text-slate-500 font-medium">
            {sourceName}
          </p>
        </div>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
          <span className="text-emerald-600 text-sm">→</span>
        </div>
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
