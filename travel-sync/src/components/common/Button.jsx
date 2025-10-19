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
    'bg-gradient-to-r',
    'from-blue-600',
    'to-indigo-600',
    'text-white',
    'font-medium',
    'py-3',
    'px-8',
    'rounded-xl',
    'shadow-lg',
    'shadow-blue-500/25',
    'hover:from-blue-700',
    'hover:to-indigo-700',
    'hover:shadow-xl',
    'hover:shadow-blue-500/30',
    'hover:-translate-y-0.5',
    'focus:outline-none',
    'focus:ring-4',
    'focus:ring-blue-300',
    'active:translate-y-0',
    'transition-all',
    'duration-200',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:bg-gray-400',
    'disabled:shadow-none',
    'disabled:transform-none',
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
