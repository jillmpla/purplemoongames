import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon } from './Icons';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/games', label: 'Games' },
  { to: '/characters', label: 'Characters' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink className="brand" to="/" aria-label="Purple Moon Games home">
          <img
            className="brand-logo"
            src="/Other_Images/PurpleMoonLogo.png"
            alt=""
            width="1319"
            height="279"
          />
          <span className="brand-domain">
            <span aria-hidden="true">✦</span>
            <span>www.purplemoongames.xyz</span>
            <span aria-hidden="true">✦</span>
          </span>
        </NavLink>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">{open ? 'Close' : 'Open'} navigation</span>
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>

        <nav
          className={`primary-nav${open ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
