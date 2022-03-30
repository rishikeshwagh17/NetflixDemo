import React from 'react'
import "./watch.scss"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://assets.mixkit.co/videos/preview/mixkit-friends-watching-a-live-stream-with-a-projection-23633-large.mp4"
      />
    </div>
  );
}
