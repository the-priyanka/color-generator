import React, { useEffect, useState } from "react";
import rgbToHex from "./Untils";

const SingleColor = (props) => {
  const [alert, setAlert] = useState(false);
  const bcg = props.rgb.join(",");
  const hex = rgbToHex(...props.rgb);
  const hexValue = `#${props.hexColor}`;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article
      className={`color ${props.index > 10 && "color-light"}`}
      style={{ background: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{props.weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
