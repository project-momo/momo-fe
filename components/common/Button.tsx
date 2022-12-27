import React from 'react';
import styles from './button.module.css';
type Props = {
  className?: string;
};
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
  priceLabel?: string;
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
  const mode = disabled
    ? styles.storybook_button__disabled
    : styles.storybook_button__primary;
  return (
    <button
      type="button"
      className={[
        styles.storybook_button,
        styles[`storybook_button__${size}`],
        mode,
      ].join(' ')}
      style={{ backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {priceLabel ? (
        <>
          {' '}
          <span className={styles.price}>{priceLabel}</span> 원 <br /> 결제하고
          시작하기{' '}
        </>
      ) : (
        label
      )}
    </button>
  );
};
