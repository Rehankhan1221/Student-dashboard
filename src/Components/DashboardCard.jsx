import DashboardBox from "./DashboardBox";
import courseIcon from "../assets/book-open-cover.png";
import taskIcon from "../assets/list-check.png";
import settingsIcon from "../assets/settings.png";
import timer from "../assets/hourglass-end.png";

import studyImg from "../assets/studyImg.png";

const DashboardCard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome back, Rehan!</h2>

      <small>Keep going! You're doing great in your studies.</small>

      <img
        src={studyImg}
        alt="Student studying"
        id="studyImg"
      />

      <div className="boxes">
        <DashboardBox
          icon={courseIcon}
          title="Total Course"
          number="06"
          description="Total"
        />

        <DashboardBox
          icon={taskIcon}
          title="Tasks Completed Task"
          number="12"
          description="Completed Task"
        />

        <DashboardBox
          icon={timer}
          title="Pending Tasks"
          number="04"
          description="Remaining Task"
        />

        <DashboardBox
          icon={settingsIcon}
          title="Overall Progress"
          number="75%"
          description="Overall progress"
        />
      </div>
    </div>
  );
};

export default DashboardCard;