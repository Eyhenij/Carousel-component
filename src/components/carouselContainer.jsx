import React from 'react';
import Carousel from "./carousel";
import image1 from '../assets/001.jpeg';
import image2 from '../assets/002.jpeg';
import image3 from '../assets/003.jpeg';
import image4 from '../assets/004.jpeg';
import image5 from '../assets/005.jpeg';
import image6 from '../assets/006.jpeg';


class CarouselContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            images: [
                image1,
                image2,
                image3,
                image4,
                image5,
                image6
            ],
            currentImageIndex: 0,
            isCycleMode: false,
            movePrev: false,
            moveNext: true
        };

        // this.nextSlideHandler = this.nextSlideHandler.bind(this);
    }

    // _nextSlide() {
    //     if (this.state.currentImageIndex < this.state.images.length - 1) {
    //         this.state.currentImageIndex = this.state.currentImageIndex + 1;
    //         this.setState({movePrev: true});
    //     } else {
    //         if (this.state.currentImageIndex < this.state.images.length) {
    //             this.setState({moveNext: false});
    //         }
    //     }
    // }
    //
    // _prevSlide() {
    //     if (this.state.currentImageIndex > 0) {
    //         this.state.currentImageIndex = this.state.currentImageIndex - 1;
    //         this.setState({moveNext: true});
    //     } else {
    //         if (this.state.currentImageIndex <= 0) {
    //             this.setState({movePrev: false});
    //         }
    //     }
    // }

    nextSlideHandler = (event) => {
        let newIndex = this.state.currentImageIndex;
        let arrLength = this.state.images.length;
        if (event.currentTarget.dataset.direction === 'next') {
            // this._nextSlide();
            if (newIndex < arrLength - 1) {
                this.state.currentImageIndex = this.state.currentImageIndex + 1;
                this.setState({movePrev: true});
            } else {
                if (newIndex < arrLength) {
                    this.setState({moveNext: false});
                }
            }
        } else {
            // this._prevSlide();
            if (newIndex > 0) {
                this.state.currentImageIndex = this.state.currentImageIndex - 1;
                this.setState({moveNext: true});
            } else {
                if (this.state.currentImageIndex <= 0) {
                    this.setState({movePrev: false});
                }
            }
        }
        this.setState({currentImageIndex: this.state.currentImageIndex});
    }

    render() {
        return (
            <Carousel state={this.state}
                      nextSlideHandler={this.nextSlideHandler}
            />
        )
    }
}

export default CarouselContainer;