import L from "leaflet";

import { useMap } from "react-leaflet";

import "./Legend.css";

import { useEffect } from "react";

function Legend() {
  /*
  const map = useMap();

  const legend = new L.Control({ position: 'bottomright' });

  legend.onAdd = () => {
    const div = L.DomUtil.create("div", "legend");
    div.innerHTML = `
      <h3>Legend</h3>
      <div><span style="background-color: #800026; width: 20px; height: 20px; display: inline-block;"></span> >25%</div>
      <div><span style="background-color: #BD0026; width: 20px; height: 20px; display: inline-block;"></span> 23-25%</div>
      <div><span style="background-color: #E31A1C; width: 20px; height: 20px; display: inline-block;"></span> 21-23%</div>
      <div><span style="background-color: #FC4E2A; width: 20px; height: 20px; display: inline-block;"></span> 19-21%</div>
      <div><span style="background-color: #FD8D3C; width: 20px; height: 20px; display: inline-block;"></span> 17-19%</div>
      <div><span style="background-color: #FEB24C; width: 20px; height: 20px; display: inline-block;"></span> 15-17%</div>
      <div><span style="background-color: #FFEDA0; width: 20px; height: 20px; display: inline-block;"></span> No Data</div> 

      <!-- Add more legend items as needed -->
    `;
    return div;
  };

  legend.addTo(map);

  return null;*/

  const map = useMap();
  useEffect(() => {
    const legend = new L.Control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "legend");
      div.innerHTML = `
        <h3>Legend</h3>
        <div><span style="background-color: #08589e; width: 20px; height: 20px; display: inline-block;"></span> >25%</div>
      <div><span style="background-color: #2b8cbe; width: 20px; height: 20px; display: inline-block;"></span> 23-25%</div>
      <div><span style="background-color: #4eb3d3; width: 20px; height: 20px; display: inline-block;"></span> 21-23%</div>
      <div><span style="background-color: #7bccc4; width: 20px; height: 20px; display: inline-block;"></span> 19-21%</div>
      <div><span style="background-color: #a8ddb5; width: 20px; height: 20px; display: inline-block;"></span> 17-19%</div>
      <div><span style="background-color: #ccebc5; width: 20px; height: 20px; display: inline-block;"></span> 15-17%</div>
      <div><span style="background-color: #f0f9e8; width: 20px; height: 20px; display: inline-block;"></span> No Data</div> 

      `;
      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
}

export default Legend;
