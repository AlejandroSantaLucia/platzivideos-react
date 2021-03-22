import React from 'react';
import PropTypes from 'prop-types'
import '../assets/styles/components/CarouselItem.scss'
import PlusIcon from '../assets/statics/plus-icon.png' // aca lo importo
import PlayIcon from '../assets/statics/play-icon.png' // aca lo importo


const CarouselItem =({ cover, title, year, contentRating, duration})=>(
    <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title}  />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src={PlusIcon} alt="Play Icon"/>  
        <img className="carousel-item__details--img" src={PlayIcon}  alt="Plus Icon"/> 
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {year} {contentRating} { duration} 
      </p>
    </div>
  </div>
)

CarouselItem.propTypes ={
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,  
}

export default CarouselItem