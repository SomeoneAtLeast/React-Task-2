import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

interface NavigationProps {
  links: { to: string; name: string }[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <nav className="navigation">
      {links.map(link => {
        return (
          <Link className="navigation-link" to={link.to} key={link.to}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
