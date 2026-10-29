

const DashboardBox = ({ icon, title, number, description }) => {
  return (
    <div className="box">
      <div className="box-top">
        <div className="box-icon">
          <img src={icon} alt="" />
        </div>

        <span className="box-description">{description}</span>
      </div>

      <h2>{number}</h2>
      <p>{title}</p>
    </div>
  );
};

export default DashboardBox;