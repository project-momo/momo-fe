import React from 'react';
import styles from './headerButton.module.css';
interface ButtonProps {
   label: string;
   onClick?: () => void;
}
export const HeaderButton = ({ label, onClick }: ButtonProps) => {
   return (
      <button className={styles.button} onClick={onClick}>
         {label}
      </button>
   );
};
