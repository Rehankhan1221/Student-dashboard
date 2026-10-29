
import bell from "../assets/bell.png";
import person from "../assets/person.png";
import angleDown from "../assets/angle-down.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="search-box">
        <input
          type="text"
          id="searching"
          placeholder="Search courses, tasks..."
        />
      </div>

      <div className="profile-img">
        <button className="icon-btn" aria-label="Notifications">
          <img src={bell} alt="" />
          <span className="notification-dot"></span>
        </button>

        <div className="profile">
          <img className="avatar" src={person} alt="Profile" />

          <div className="profile-info">
            <h4>Rehan Khan</h4>
            <small>Student</small>
          </div>

          <button className="dropdown-btn" aria-label="Open profile menu">
            <img src={angleDown} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;