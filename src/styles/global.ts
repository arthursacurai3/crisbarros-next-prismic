import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Inter, sans-serif;
  }


@media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body,
input,
textarea,
select,
button {
  font: 400 1rem "Roboto", sans-serif;
}

li {
  list-style: none;
}

button {
  cursor: pointer;
}

.icon-btn {
  background: transparent;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-style-none{
  background: transparent;
  border: 0;
  font-size: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
