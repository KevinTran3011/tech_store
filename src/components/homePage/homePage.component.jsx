import { Outlet, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage_container">
      <div className="homePage-container--title">Title</div>

      <div className="homePage_container--links">
        <nav>
          <li>
            <Link to="/" className="homePage_container--links__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Log_in" className="homePage_container--links__link">
              Log In
            </Link>
          </li>
          <li>
            <Link to="/Check_out" className="homePage_container--links__link">
              Check Out
            </Link>
          </li>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
