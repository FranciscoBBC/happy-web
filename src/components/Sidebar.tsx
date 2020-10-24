import React from 'react';

import {
  SidebarWrapper,
  SidebarMain,
  Title,
  Text,
  Location,
  Content
} from '@styles/components/sidebar';
import Marker from '../assets/images/marker.svg';

const Sidebar = () => {
  const [activeBar, setActiveBar] = React.useState(false);

  setTimeout(() => setActiveBar(true), 1000);

  return (
    <SidebarWrapper active={activeBar}>
      <SidebarMain>
        <Content>
          <Marker />
          <Title>Escolha um orfanato no mapa</Title>
          <Text>Muitas crianças estão esperando a sua visita :)</Text>
        </Content>
        <Location>
          <strong>Rio de Janeiro</strong>
          <p>Rj</p>
        </Location>
      </SidebarMain>
    </SidebarWrapper>
  );
};

export default Sidebar;
