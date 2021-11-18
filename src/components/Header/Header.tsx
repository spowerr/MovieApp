import React from 'react';
import { Link } from 'react-router-dom';
//@ts-ignore
import user from '../../images/user.png';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img height={35} width={35} src={user} alt="user" className="png" />
      </div>
    </div>
  );
};

export default Header;
