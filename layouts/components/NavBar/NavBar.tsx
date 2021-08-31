import { stubFalse } from "lodash";
import styles from "./Navbar.module.scss";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className={styles.navBar}>
      <div className="container">
        <div className="row">
          <div className="nav-wrapper d-flex justify-content-between align-items-center">
            <div className="col-md-2">
              <img
                src="./logo.svg"
                className="img-fluid"
              />
            </div>
            <div>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
