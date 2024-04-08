"use client"

import React, { useState, useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { GeoJsonObject } from "geojson";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import Legend from "./Legend";

export default function Map() {
 const [statesData, setStatesData] = useState<any | null>(null);

 useEffect(() => {  
    import("./us-states.json").then((data) => {
      setStatesData(data);
    });
 }, []);

 const GeoJSONLayer = ({ data }: any) => {
    const onEachFeature = (feature: any, layer: any) => {
      if (feature.properties && (feature.properties.density || feature.properties.name)) {
        const { name, density } = feature.properties;
        layer.on({
          mouseover: function (e: any) {
            this.bindTooltip(`<strong>${name}</strong><br />${density}`, {
              permanent: true,
              className: "",
              direction: "top",
            }).openTooltip();
          },
          mouseout: function (e: any) {
            this.closeTooltip();
          },
        });
        layer.setStyle({
          fillColor: getColor(density),
          weight: 2,
          dashArray: "3",
          fillOpacity: 0.7,
        });
      }
    };

    return <GeoJSON data={data} onEachFeature={onEachFeature} />;
 };

 return (
    <>
      <h5 style={{ left: "5%", top: "70px" , position: "relative", width: "30%", textWrap: "pretty"}}>Suicide is a severe issue that affects many high schoolers across the nation regardless of their state. </h5>
      <MapContainer
        preferCanvas={true}
        center={[37.8, -96]}
        zoom={3.75}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "50%", left: "40%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | <a href="https://nccd.cdc.gov/youthonline/app/Results.aspx">CDC 2015-202</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />

        {statesData && <GeoJSONLayer data={statesData} />}

        <Legend />
      </MapContainer>
    </>
 );
}

function getColor(density: any) {
 return density > 25
    ? "#08589e"
    : density > 23
    ? "#2b8cbe"
    : density > 21
    ? "#4eb3d3"
    : density > 19
    ? "#7bccc4"
    : density > 17
    ? "#a8ddb5"
    : density > 15
    ? "#ccebc5"
    : "#f0f9e8";
}
