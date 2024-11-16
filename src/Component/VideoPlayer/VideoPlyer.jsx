import React, { useRef } from 'react'
import './VideoPlyer.css'


const VideoPlyer = ({playState ,setPlayState}) => {
  const player = useRef(null);

  const closePlayer = (e)=>{
    if(e.target === player.current){
      setPlayState(false);
    }
  }

  return (
    <div className={`video-plyer ${playState? '':'hide'}`} ref={player} onClick={closePlayer}>
        <video src="./image/Tuk.mp4" autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlyer;