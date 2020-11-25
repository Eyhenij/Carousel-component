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
            movePrev: false,
            moveNext: true
        };

        this.nextSlideHandler = this.nextSlideHandler.bind(this);
    }

    nextSlideHandler = (e) => {

        let currentIndex = this.state.currentImageIndex;
        let newIndex = currentIndex;

        if (e.currentTarget.dataset.direction === 'next') {
            if (newIndex < this.state.images.length - 1) {
                newIndex = this.state.currentImageIndex + 1;
                this.setState({movePrev: true});
            }
            // if (newIndex === this.state.images.length -1) {
            //     // this.state.moveNext = false;
            //     this.setState({moveNext: false});
            // }
            if (newIndex > currentIndex) {
                currentIndex = 0
            }

        } else {
            if (newIndex > 0) {
                newIndex = this.state.currentImageIndex - 1;
                this.setState({moveNext: true});
            }
            if (newIndex === 0) {
                this.setState({movePrev: false});
            }
        }
        this.setState({currentImageIndex: newIndex});
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