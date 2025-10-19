import PropTypes from 'prop-types';

/**
 * Reusable Button component with consistent styling and accessibility features.
 */
const Button = ({
  children,
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseStyles = [
    'bg-blue-600',
    'text-white',
    'font-semibold',
    'py-2',
    'px-6',
    'rounded-lg',
    'shadow-md',
    'hover:bg-blue-700',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:ring-opacity-75',
    'transition-colors',
    'duration-200',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:bg-gray-400',
    'disabled:hover:bg-gray-400',
  ].join(' ');
  const finalClassName = `${baseStyles} ${className}`.trim();

  return (
    <button
      className={finalClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
