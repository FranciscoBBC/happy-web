import React from 'react';
import Sidebar from '@components/Sidebar';
import Map from '@components/Map';

import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

const childrens = '/marker.svg';

const happyMapIcon = L.icon({
  iconUrl: childrens,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

const Orphanage = () => {
  return (
    <>
      <Sidebar />
      <Map interactive>
        <Marker icon={happyMapIcon} position={[-27.2092052, -49.6401092]}>
          <Popup closeButton={false} minWidth={240} maxWidth={240}>
            lar das meninas
          </Popup>
        </Marker>
      </Map>
    </>
  );
};

export default Orphanage;
