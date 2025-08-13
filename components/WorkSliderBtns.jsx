"use client";
import {useSwiper} from 'swiper/react';
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";

const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles}) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
            <button
                className={btnStyles}
                onClick={(e)=>{
                    e.stopPropagation();
                    swiper.slidePrev()
                }}
                aria-label="Previous slide"
            >
                <PiCaretLeftBold className={`${iconsStyles} pointer-events-none`}/>
            </button>
            <button
                className={btnStyles}
                onClick={(e)=>{
                    e.stopPropagation();
                    swiper.slideNext()
                }}
                aria-label="Next slide"
            >
                <PiCaretRightBold className={`${iconsStyles} pointer-events-none`}/>
            </button>
        </div>
    )
}

export default WorkSliderBtns