import { createGlobalStyle } from "styled-components";

export const GlobalStytle = createGlobalStyle`

 :root{
    --background: #342B5A;
    --purple: #231b49;
    --white: #ffffff;
    --lightpurple: #B96BC3;
    --green: #00C0A4;
 }

* {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #ffffff;
}

h1 {
    font-weight: 600;
    color: #ffffff;
    font-family: 'Baloo 2', sans-serif;
}

h2, h3, h4, h5, h6, strong {
    font-weight: 300;
    font-size: 1.2rem;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%; // 15px
    }
}

html {
    @media (max-width: 1080px) {
        font-size: 87.5%; // 14px
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24 rem;
}

.react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }

}

`