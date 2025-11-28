import React, { useRef } from 'react';

const GlobalAudioPlayer = ({ src }) => {
  const audioRef = useRef(null);

  return (
    <audio
      ref={audioRef}
      src={src}
      controls
      style={{ display: 'none' }}
    />
  );
};

export default GlobalAudioPlayer;
