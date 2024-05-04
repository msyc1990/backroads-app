import Logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button
            type="button"
            className="nav-toggle"
            onClick={handleMenuOpen}
            id="nav-toggle"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        {openMenu && (
          <ul className="nav-links-mobile" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="nav-link"
                    onClick={handleMenuClose}
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        )}

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  className="nav-icon"
                  rel="noreferrer"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
