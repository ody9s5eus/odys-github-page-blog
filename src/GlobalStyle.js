import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    color: #0073e6;
  }

  h1, h2, h3 {
    margin-bottom: 20px;
    font-weight: bold;
    color: #333;
  }

  p {
    margin-bottom: 15px;
    color: #666;
  }

  ul, ol {
    margin: 20px 0;
    padding-left: 40px;
  }

  li {
    margin-bottom: 10px;
  }

  button {
    font-size: 16px;
    padding: 10px 20px;
    background-color: #0073e6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #005bb5;
  }
`;

export default GlobalStyle;
