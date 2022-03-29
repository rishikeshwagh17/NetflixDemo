import React, { useRef, useState } from 'react'
import "./list.scss"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Listitem from '../listitem/Listitem';
export default function List() {
    const [isMoved, setisMoved] = useState(false)
    const [slideNumber, setslideNumber] = useState(0)
    const listRef = useRef()
    const handleClick = (direction) =>{
        setisMoved(true)
      let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slideNumber > 0){
            setslideNumber(slideNumber - 1)
        listRef.current.style.transform = `translateX(${230 + distance}px)`
      }
      if(direction === "right" && slideNumber < 5){
          setslideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`
      }
  }
  
    return (
    <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlinedIcon className='sliderArrow left' onClick={()=>handleClick("left")} style={{display:!isMoved && "none"}}/>
            <div className="container" ref={listRef}>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
            </div>
            <ArrowForwardIosOutlinedIcon className="sliderArrow right" onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}
