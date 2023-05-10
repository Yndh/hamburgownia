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

          <span className="info">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
export default OpenHours;
