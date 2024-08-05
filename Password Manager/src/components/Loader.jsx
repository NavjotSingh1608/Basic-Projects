import React from 'react';
import useScript from './UseScript'; // Adjust the path as necessary

const Loader = () => {
  useScript('https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs');

  return (
    <div className="flex justify-center items-center h-screen">
      <dotlottie-player 
        src="https://lottie.host/7b908cd8-7542-48b7-8aa9-131cfe5a2f15/Slx55JR4qQ.json" 
        background="transparent" 
        speed="1" 
        style={{ width: '300px', height: '300px' }} 
        loop 
        autoplay
      />
    </div>
  );
};

export default Loader;
