import DashboardCard from "./Components/DashboardCard";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Routes, Route} from "react-router";
import Course from "./Pages/Course";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Tasks from "./Pages/Task";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="NavSide">
          <SideBar />
          <div className="mainbody">
            <Navbar />
            <Routes>
              <Route path="/" element={<DashboardCard />} />
              <Route path="/Course" element={<Course />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Tasks" element={<Tasks />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
