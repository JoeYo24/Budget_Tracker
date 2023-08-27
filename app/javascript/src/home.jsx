import React from 'react'
import ReactDOM from 'react-dom'

const Home = () => {
  return (
    <h2>Hello World!</h2>
  )
};

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Home />,
        document.body.appendChild(document.createElement('div')),
    );
});