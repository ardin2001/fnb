"use client";
import React from 'react';
import { APIProvider, Map, Marker, MapCameraChangedEvent, InfoWindow, } from '@vis.gl/react-google-maps';

const MapVis = () => {
  return (
    <APIProvider apiKey={process.env.MAPS_API_KEY || ""}>
      <Map
        style={{ width: '100%', height: '400px' }}
        defaultCenter={{ lat: -8.097987, lng: 113.234853 }}
        defaultZoom={10}
        gestureHandling={'greedy'}
      >
        <Marker position={{ lat: -8.097987, lng: 113.234853 }} />
        <InfoWindow position={{ lat: -8.097987, lng: 113.234853 }} >
          <h4>Aseloley Cafe</h4>
          <p>Jln. Aseloley No.44 Lumajang</p>
        </InfoWindow>
      </Map>
    </APIProvider>
  )
};

export default MapVis