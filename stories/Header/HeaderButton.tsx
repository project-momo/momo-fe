import React from 'react';
import './headerButton.css';
interface ButtonProps {
   label : string
   onClick?: () => void;
}
export const HeaderButton = ({label, onClick}:ButtonProps) => {
   return (
      <button onClick={onClick}>
         {label}
      </button>
   );
};
