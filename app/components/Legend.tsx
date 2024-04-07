import { useEffect } from "react";
import L, { Control } from "leaflet";
import "./Legend.css";

class LegendControl extends Control {
 constructor(options:any) {
    super(options);
 }

 onAdd(map:any) {
    const div = L.DomUtil.create("div", "info legend");
    div.innerHTML =
      "<h4>This is the legend</h4>" +
      "<b>Lorem ipsum dolor sit amet consectetur adipiscing</b>";
    return div;
 }
}

function Legend({ map }:any) {
  console.log(map);
  useEffect(() => {
    if (map) {
      const legend = new LegendControl({ position: "bottomright" });
    }
  }, [map]);
  return null;
}

export default Legend;
