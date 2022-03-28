import React from 'react'
import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
export default function Featured({type}) {
  return (
    <div className="featured">
    {type && (
      <div className="category">
        <span>{type === "movie" ? "Movies" : "Series"}</span>
        <select name="genre" id="genre">
          <option>Genre</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="fantasy">Fantasy</option>
          <option value="historical">Historical</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="thriller">Thriller</option>
          <option value="western">Western</option>
          <option value="animation">Animation</option>
          <option value="drama">Drama</option>
          <option value="documentary">Documentary</option>
        </select>
      </div>
    )}
        <img width="100%" src="https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus id facere doloremque facilis dolores eum obcaecati? Illo nemo, quos molestiae maxime vel, aspernatur, earum facere obcaecati porro delectus voluptatibus!</span>
        <div className="buttons">
            <button className="play">
                <PlayArrowIcon/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlinedIcon/>
                <span>Info</span>
            </button>
        </div>
        </div>
    </div>
  )
}
