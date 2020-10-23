import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: ${props => props.theme.color.background};
        color: ${props => props.theme.color.text};
    }
    body, input, button, textarea {
        font: ${props => props.theme.font.default};
    }
`;
