
import {NavLink} from 'react-router'
const SideBar = () => {
  return (
    <div className="SideBar">
      <h2 className="sidebar-title">Student Dashboard</h2>

      <div className="pages">
        <ul>
          <li className="active">
            <NavLink to="/" className={({ isActive})=>
              isActive ? "sidebar-link active" : "sidebar-link"
            }>
            <img src="./src/assets/home.png" alt="" />
            <span>Home</span>
            </NavLink>
          </li>

          <li>
          <NavLink to="/Course" className={({ isActive})=>
              isActive ? "sidebar-link active" : "sidebar-link"
            }>
            <img src="./src/assets/book-open-cover.png" alt="" />
            <span>Courses</span>
            </NavLink>
          </li>

          <li>
           <NavLink to="/Tasks" className={({ isActive})=>
              isActive ? "sidebar-link active" : "sidebar-link"
            }>
            <img src="./src/assets/list-check.png" alt="" />
            <span>Tasks</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/Profile" className={({ isActive})=>
              isActive ? "sidebar-link active" : "sidebar-link"
            }>
            <img src="./src/assets/user.png" alt="" />
            <span>Profile</span>
            </NavLink>
          </li>

          <li>
             <NavLink to="/Settings" className={({ isActive})=>
              isActive ? "sidebar-link active" : "sidebar-link"
            }>
            <img src="./src/assets/settings.png" alt="" />
            <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;