import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './slideshow.styles.scss';

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${'https://www.arreglosflorales.info/wp-content/uploads/2017/12/Chocolates-Surtidos.jpg'})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${'https://s3.amazonaws.com/azapflores/0/arreglo-de-globos-cumplea_os-azap-dot-com-1200px-1200px-1-.jpg'})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfK6nSByHX2zDlLRuyYwueVPhejm72KPfSHg&usqp=CAU'})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;