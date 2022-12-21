import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
   disabled?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'bigBold' | 'bigThin' | 'smallBold';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
   priceLabel: string
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  disabled = false,
  size,
  backgroundColor,
  priceLabel,
  label,
  ...props
}: ButtonProps) => {
  const mode = disabled ?  'storybook-button--disabled': 'storybook-button--primary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      disabled ={disabled}
      {...props}
    >

     {priceLabel ?<> <span className='price'>{priceLabel}</span>  원 <br/> 결제하고 시작하기 </>: label }
    </button>
  );
};
