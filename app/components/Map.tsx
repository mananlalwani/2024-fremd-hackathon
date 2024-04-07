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
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";

import statesData from "./us-states.json";

export default function Map() {
  console.log(statesData);
  return (
      <MapContainer
        preferCanvas={true}
        center={[37.8, -96]}
        zoom={3.65}
        scrollWheelZoom={true}
        style={{ height: "600px", width: "1200px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}

        />
       
        <GeoJSON data={statesData as GeoJsonObject} />
        
      </MapContainer>
  );
}