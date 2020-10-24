import styled from 'styled-components';

interface SidebarWrapper {
  active?: boolean;
}

export const SidebarWrapper = styled.div<SidebarWrapper>`
  position: absolute;
  left: -350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.color.one};
  width: 350px;
  height: 100vh;
  transition: 0.5s ease-in-out;

  transform: ${props => (props.active ? 'translateX(350px)' : 'none')};
`;

export const SidebarMain = styled.div`
  padding: 60px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled.h1`
  max-width: 350px;
  font-size: 40px;
  font-weight: 900;
  line-height: 42px;
  margin-top: 60px;
`;

export const Text = styled.p`
  max-width: 350px;
  margin-top: 30px;
  font-family: Nunito;
  font-size: 18px;
  line-height: 28px;
`;

export const Content = styled.div``;

export const Location = styled.div`
  font-size: 18px;
  line-height: 28px;
  display: flex;
  flex-direction: column;

  strong {
    font-weight: 800;
  }
`;
