import { Link, NavLink, Outlet } from 'react-router-dom';
import { publicAsset } from '../utils/assets';
import SkipLink from './SkipLink';

export default function Layout() {
  return (
    <>
      <SkipLink />
      <header className="site-header" role="banner">
        <div className="header-inner">
          <Link to="/" className="logo-link" aria-label="ATRIEV — go to home page">
            <img
              src={publicAsset('logos/ATRIEV (Redesigned Logo) (1).png')}
              alt="ATRIEV logo"
              className="logo"
              width={240}
              height={120}
            />
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <ul className="nav-list">
              <li>
                <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/toolkit"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  Toolkit
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="site-main" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="footer-inner">
          <nav aria-label="ATRIEV social media links">
            <ul className="social-list">
              <li>
                <a
                  href="https://www.facebook.com/ATRIEV"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ATRIEV Official Facebook Page (opens in new tab)"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}icon-facebook.svg`}
                    alt=""
                    aria-hidden="true"
                    width={32}
                    height={32}
                  />
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@ATRIEVI.T.Center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ATRIEV I.T. Center YouTube channel (opens in new tab)"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}icon-youtube.svg`}
                    alt=""
                    aria-hidden="true"
                    width={32}
                    height={32}
                  />
                  <span className="sr-only">YouTube</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.atriev.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ATRIEV website (opens in new tab)"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}icon-website.svg`}
                    alt=""
                    aria-hidden="true"
                    width={32}
                    height={32}
                  />
                  <span className="sr-only">Website</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:inquiry@atriev.org"
                  aria-label="Email ATRIEV at inquiry@atriev.org"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}icon-email.svg`}
                    alt=""
                    aria-hidden="true"
                    width={32}
                    height={32}
                  />
                  <span className="sr-only">Email</span>
                </a>
              </li>
            </ul>
          </nav>
          <p className="copyright">
            &copy; {new Date().getFullYear()} ATRIEV. Cybercrime Reporting Made Accessible.
          </p>
        </div>
      </footer>
    </>
  );
}
