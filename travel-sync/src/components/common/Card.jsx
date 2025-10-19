import PropTypes from 'prop-types';

/**
 * Generic Card component that acts as a styled container for feature modules.
 * Provides consistent card styling with customizable layout options.
 */
const Card = ({ children, className = '' }) => {
  // Base card styles with subtle shadow and clean appearance
  const baseStyles = [
    'bg-white',
    'rounded-xl',
    'shadow-sm',
    'p-4',
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
