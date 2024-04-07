/*"use client";

import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function MyMap(props: any) {
  const { position, zoom } = props

  return <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
}

*/

"use client";

// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";

import { GeoJsonObject } from "geojson";
// END: Preserve spaces to avoid auto-sorting
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

import statesData from "./us-states.json";

import Legend from "./Legend";

export default function Map() {
  const GeoJSONLayer = ({ data }:any) => {
    const onEachFeature = (feature:any, layer:any) => {
      if (feature.properties && (feature.properties.density || feature.properties.name))  {
        const {name, density} = feature.properties
        layer.on({
          mouseover: function (e:any) {
            this.bindTooltip(
              `<strong>${name}</strong><br />${density}`,
              {
                permanent: true,
                className: '',
                direction: "top",
              }
            ).openTooltip();
          },
          mouseout: function (e:any) {
            this.closeTooltip();
          },
        });
        layer.setStyle({
          fillColor: getColor(density),
          weight: 2,
          dashArray: "3",
          fillOpacity: 0.7,
        })
      }
    };

    return <GeoJSON data={data} onEachFeature={onEachFeature} />;
  };

  console.log(statesData);
  return (
    <MapContainer
      preferCanvas={true}
      center={[37.8, -96]}
      zoom={3.75}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />

      {/* <GeoJSON data={statesData as GeoJsonObject} /> */}
      <GeoJSONLayer data={statesData} />

      <Legend />
    </MapContainer>
  );
}

function getColor(density: any) {
  return density > 25 ? "#800026" :
    density > 23 ? "#BD0026" :
    density > 21 ? "#E31A1C" :
    density > 19 ? "#FC4E2A" :
    density > 17 ? "#FD8D3C" :
    density > 15 ? "#FEB24C" :
    density > 13 ? "#FED976" :
    "#FFEDA0";
}
