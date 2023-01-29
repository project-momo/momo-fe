import React from 'react';
import styles from './button.module.css';

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
export const Button = ({ size, backgroundColor, priceLabel, label, disabled, onClick, ...props }: ButtonProps) => {
   const mode = disabled ? styles.storybook_button__disabled : styles.storybook_button__primary;
   return (
      <button
         disabled={disabled}
         type="button"
         className={[styles.storybook_button, styles[`storybook_button__${size}`], mode].join(' ')}
         style={{ backgroundColor }}
         onClick={onClick}
         {...props}>
         {priceLabel ? (
            disabled ? (
               <span>모집이 마감되었습니다.</span>
            ) : (
               <>
                  {' '}
                  <span className={styles.price}>{priceLabel}</span> 원 <br /> 결제하고 시작하기{' '}
               </>
            )
         ) : (
            label
         )}
      </button>
   );
};
