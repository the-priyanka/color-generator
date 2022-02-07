import React, { useState } from "react";
import rgbToHex from "./Untils";

const SingleColor = (props) => {
  const [alert, setAlert] = useState(false);
  const bcg = props.rgb.join(",");
  const hex = rgbToHex(...props.rgb);
  const hexValue = `#${props.hexColor}`;
  return (
    <article
      className={`color ${props.index > 10 && "color-light"}`}
      style={{ background: `rgb(${bcg})` }}
    >
      <p className="percent-value">{props.weight}%</p>
      <p className="color-value">{hexValue}</p>
    </article>
  );
};

export default SingleColor;
