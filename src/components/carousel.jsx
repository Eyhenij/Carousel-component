import React from 'react';
import s from './carousel.module.css';


const Carousel = (props) => {
    return (
        <div className={s.page}>
            <h1>Carousel</h1>
            <span className={s.page__carousel}>
                <div>
                    <button className={s.page__button}
                            disabled={!props.state.movePrev}
                            onClick={props.nextSlideHandler}
                            data-direction='prev'
                    >
                        PREV
                    </button>
                </div>
                 <div className={s.carousel__container}>
                    <img className={s.carousel__image}
                         src={props.state.images[props.state.currentImageIndex]}
                         alt={'image'}
                    />
                </div>
                {/*<div>*/}
                {/*    {props.state.currentImageIndex}*/}
                {/*</div>*/}
                <div>
                    <button className={s.page__button}
                            disabled={!props.state.moveNext}
                            onClick={props.nextSlideHandler}
                            data-direction='next'
                    >
                        NEXT
                    </button>
                </div>
            </span>
        </div>
    )
}

export default Carousel;