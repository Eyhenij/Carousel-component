import React from 'react';
import s from './carousel.module.css';


const Carousel = (props) => {
    return (
        <div className={s.page}>
            <h1>Carousel app</h1>
            <span className={s.page__carousel}>
                 <div className={s.carousel__container}>
                     <div>
                         <button className={`${s.carousel__button} ${s.button__prev}`}
                            disabled={!props.state.movePrev}
                            onClick={props.nextSlideHandler}
                            data-direction='prev'
                         >
                             {"<"}
                         </button>
                     </div>
                     <div>
                         <img className={s.carousel__image}
                              src={props.state.images[props.state.currentImageIndex]}
                              alt={'someImage'}
                         />
                     </div>
                     <div>
                         <button className={`${s.carousel__button} ${s.button__next}`}
                                 disabled={!props.state.moveNext}
                                 onClick={props.nextSlideHandler}
                                 data-direction='next'
                         >
                             {">"}
                         </button>
                     </div>
                </div>
            </span>
        </div>
    )
}

export default Carousel;