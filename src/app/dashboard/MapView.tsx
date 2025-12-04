"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import React, { useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapView() {
  const [position, setPosition] = useState<[number, number] | null>(null);

  function MapClickHandler() {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        alert(`📍 Incident location selected:
Latitude: ${e.latlng.lat}
Longitude: ${e.latlng.lng}`);
      },
    });
    return null;
  }

  return (
    <MapContainer
      center={[28.6139, 77.209]} // Default center — India
      zoom={6}
      style={{ height: "300px", width: "100%", borderRadius: "10px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapClickHandler />
      {position && <Marker position={position} icon={redIcon} />}
    </MapContainer>
  );
}
