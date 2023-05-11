import "./OpenHours.css";

const OpenHours = () => {
  return (
    <div className="openHours">
      <h2>
        Godziny <span className="color">Otwarcia</span>
      </h2>

      <div className="hours">
        <div className="dayRow">
          <span>Pon. - Pt</span>
          <span>9:00 - 22:30</span>
        </div>
        <div className="dayRow">
          <span>Sob</span>
          <span>10:00 - 22:00</span>
        </div>
        <div className="dayRow">
          <span>Nd.</span>
          <span>10:00 - 18:00</span>
        </div>
      </div>
    </div>
  );
};
export default OpenHours;
