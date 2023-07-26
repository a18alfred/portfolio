import { createGlobalStyle } from 'styled-components';
import { gradientText } from './reusableCss';

export const GlobalStylesOS = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'MSSerif', sans-serif;
  }

  html, body {
    background-color: #000000;
    height: 100%;
    margin: 0;
    overflow: hidden;
  }

  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #webamp-context-menu {
    z-index: 1000000 !important;
  }

  .white {
    color: #fff;
  }

  .site-page {
    display: flex;
    left: 0px;
    right: 0px;
    position: absolute;
    bottom: 0px;
    top: 0px;
    transform: translate3d(0, 0, 0);
    overflow: hidden;
  }

  .site-page-content {
    display: flex;
    flex-direction: column;
    margin-left: 300px;
    width: 100%;
    padding: 64px;
    padding-top: 32px;
    padding-left: 16px;
    overflow-y: scroll;
  }
`;

export const GlobalStylesPortfolio = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    scroll-behavior: smooth;
    color: #FFFFFF;
    background-color: #000000;
  }

  html,
  body {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    font-family: inherit;
  }

  button {
    all: unset;
  }

  ul {
    list-style-type: none;
  }

  li {
    list-style: none;
  }

  img {
    width: 100%;
    display: block;
  }

  .icon {
    color: #FFFFFF;
  }

  .text-gradient {
    ${gradientText};
  }

  .vertical-timeline {
    max-width: 100% !important;
  }

  .vertical-timeline.vertical-timeline--two-columns {
    width: 100%;
  }

  .vertical-timeline-element-content {
    border-radius: 5px;
    box-shadow: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0);
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.portfolio.primaryColor};
  }

  //::-webkit-scrollbar {
  //  display: none;
  //}
`;
