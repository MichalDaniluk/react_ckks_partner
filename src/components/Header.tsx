import React, {FunctionComponent} from 'react';
import { Link } from "react-router-dom";

type HeaderProps = {
    onClick: () => void;
    value?:string;
}

export const Header: FunctionComponent<HeaderProps> =(value, onClick) => {
  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/"><img src="/img/Logo_CKKS_gold.svg" alt="CKKS" /></Link>
      </div>
      <div></div>
      <div className="header-images">
        <img src="/img/ISO-small.png" alt="ISO" />
        <img src="/img/collegium.svg" alt="ISO" />
      </div>
    </div>
  );
};

export default Header;
