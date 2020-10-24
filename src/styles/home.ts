import styled from 'styled-components';

const childrens = '/childrens.svg';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.color.one};
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  max-width: ${props => props.theme.sizes.desktop}px;
  height: 100%;
  max-height: 680px;
  margin: 0 auto;
  background: url(${childrens}) no-repeat 80% center;
`;

export const Title = styled.h1`
  max-width: 350px;
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`;

export const Text = styled.p`
  max-width: 350px;
  margin-top: 40px;
  font-family: Nunito;
  font-size: 24px;
  line-height: 34px;
`;

export const Location = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 24px;
  line-height: 34px;
  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    font-weight: 800;
  }
`;

export const EnterApp = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0px;
  bottom: 0px;
  width: 80px;
  height: 80px;
  border-radius: 30px;
  background: ${props => props.theme.color.two};
  transition: background-color 0.2s;
  cursor: pointer;

  :hover {
    background: ${props => props.theme.color.four};
  }
`;
