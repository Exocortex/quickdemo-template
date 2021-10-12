import React, { useState, useEffect } from "react";
import "./style.css";

function KitchenConfig() {

  const [color, setColor] = useState("#921919");

  const handleChange = (e) => {
    setColor(e.target.value);
    e.preventDefault();
    window.configurator.setConfiguration({ Color: e.target.value });
  };

  return (
    <div>
      <div className="kitchenForm">
        <div id="color">
          <p className="formTitle">Click the swatch below to customize</p>
          <input
            type="color"
            id="aidColor"
            name="head"
            value={color}
            onChange={(e) => handleChange(e)}
            style={{ background: color }}
          />
        </div>
      </div>
    </div>
  );
}

export default KitchenConfig;
