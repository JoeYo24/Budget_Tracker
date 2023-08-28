import React from 'react'
import ReactDOM from 'react-dom'
import AbcIcon from '@mui/icons-material/Abc';
import './styles.css'

const Home = () => {
  return (
    <div className='bg-blue-500 text-white p-4 rounded-lg shadow-md'>    
        <h2 className='text-lg font-semibold'>
            Hello World!
            <AbcIcon />
        </h2>
    </div>   
  )
};

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Home />,
        document.body.appendChild(document.createElement('div')),
    );
});