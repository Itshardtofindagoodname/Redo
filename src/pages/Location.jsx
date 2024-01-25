import React from 'react';
import Map from '../components/Map';

function Location(props) {
    return (
        <div className='min-h-screen'>
            <nav className='bg-black text-white h-14 font-bold text-4xl flex items-center'><span className='ml-2'>Redo</span></nav>
            <div className="flex flex-col justify-center p-2">
                <div className='text-md text-center font-medium'>Click on the map and grant "Location Permission" to know what's happening in your locality.</div>
                <Map/>
            </div>
            <div className='m-10'/>
        </div>
    );
}

export default Location;