import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

import "./FindUs.css";
import marker from "../../../assets/marker.webp";

const FindUs = () => {
  const customIcon = new Icon({
    iconUrl: marker,
    iconSize: [20, 35],
    iconAnchor: [10, 35],
    popupAnchor: [0, -40],
  });
  const position = [53.7799, 20.4942];

  return (
    <div className="findUs">
      <span id="findus" className="link"></span>
      <h2>
        Znajdź <span className="color">Nas</span>
      </h2>

      <div className="map" style={{ zIndex: 0 }}>
        <MapContainer
          center={position}
          zoom={16}
          minZoom={2}
          scrollWheelZoom={true}
          style={{
            width: "100%",
            height: "100%",
            zIndex: 2,
            background: "transparent",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            // Realistic map
            // url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg"
            // attribution='Map data &copy; <a href="https://www.openstreetmap.org/"  target="_blank">OpenStreetMap</a> contributors'
            noWrap={true}
          />

          <Marker position={position} icon={customIcon}>
            <Popup>🍔Hamburgownia🍔</Popup>
          </Marker>

          {/* <MyComponent /> */}
        </MapContainer>
      </div>
    </div>
  );
};
export default FindUs;
