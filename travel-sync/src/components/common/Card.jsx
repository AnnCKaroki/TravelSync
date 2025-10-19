import PropTypes from 'prop-types';

/**
 * Generic Card component that acts as a styled container for feature modules.
 * Provides consistent card styling with customizable layout options.
 */
const Card = ({ children, className = '' }) => {
  // Modern card styles with enhanced shadows and professional appearance
  const baseStyles = [
    'bg-white',
    'rounded-2xl',
    'shadow-lg',
    'shadow-slate-200/50',
    'border',
    'border-slate-100',
    'p-6',
    'backdrop-blur-sm',
    'transition-all',
    'duration-300',
    'hover:shadow-xl',
    'hover:shadow-slate-200/60',
    'hover:-translate-y-1',
  ].join(' ');

  // Merge base styles with custom className for layout flexibility
  const finalClassName = `${baseStyles} ${className}`.trim();

  return (
    <div className={finalClassName}>
      {children}
    </div>
  );
};

Card.propTypes = {
  // Content to be rendered inside the card container
  children: PropTypes.node.isRequired,
  // Additional CSS classes for custom styling and layout adjustments
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};

export default Card;
