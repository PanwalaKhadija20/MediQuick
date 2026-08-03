import { useState } from "react";
import { FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

function Location() {
  const locations = [
    "Adajan, Surat",
    "Vesu, Surat",
    "Pal, Surat",
    "Katargam, Surat",
    "Varachha, Surat",
    "Athwa, Surat",
    "Udhna, Surat",
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="location">
      <FaMapMarkerAlt className="location-icon" />

      <div className="location-info">
        <small>Deliver to</small>

        <div
          className="location-select"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span>{selectedLocation}</span>
          <FaChevronDown
            className={`arrow ${showDropdown ? "rotate" : ""}`}
          />
        </div>

        {showDropdown && (
          <ul className="dropdown">
            {locations.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setSelectedLocation(item);
                  setShowDropdown(false);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Location;