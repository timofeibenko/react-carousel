import React, { useState, useEffect, useCallback, useRef } from 'react';
import { css, jsx } from '@emotion/react';

import Content from "./Content";
import Slide from "./Slide";
import Navigation from "./Navigation";
import Pagination from "./Pagination";

/** @jsx jsx */

const carouselStyles = css`
    position: relative;
    
    height: 70%;
    width: 90vw;
    
    margin: 0 auto;
    overflow: hidden;
`;

const Carousel = (props) => {

    const { slidesData } = props;

    const [carouselState, setCarouselState] = useState({
        translate: 0,
        transitionDur: 0,
        activeSlide: 0,
        slideWidth: 0,
        contentWidth: 0,
    });

    const [touchState, setTouchState] = useState({
        startX: 0,
        endX: 0,
        deltaX: 0,
    });

    const [swipeState, setSwipeState] = useState({
        startTime: 0,
        startX: 0,
    });

    const [absTranslateState, setAbsTranslateState] = useState(0);

    useEffect(() => {
        const getWidth = () => document.querySelector('.carousel').offsetWidth;

        setCarouselState({
            ...carouselState,
            slideWidth: getWidth(),
            contentWidth: getWidth(),
        })

        const handleResize = () => {

            setCarouselState({
                ...carouselState,
                slideWidth: getWidth(),
                contentWidth: getWidth(),
            })
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, []);

    const prevSlide = () => {
        if (carouselState.activeSlide === 0) return

        setCarouselState({
            ...carouselState,
            activeSlide: carouselState.activeSlide - 1,
            transitionDur: 0.4,
            translate: carouselState.slideWidth * (carouselState.activeSlide - 1),
        })

        setAbsTranslateState(carouselState.slideWidth * (carouselState.activeSlide - 1))
    }

    const nextSlide = () => {
        if (carouselState.activeSlide === slidesData.length - 1) return

        setCarouselState({
            ...carouselState,
            translate: carouselState.slideWidth * (carouselState.activeSlide + 1),
            transitionDur: 0.4,
            activeSlide: carouselState.activeSlide + 1,
        });

        setAbsTranslateState(carouselState.slideWidth * (carouselState.activeSlide + 1))
    }

    const handleTouchStart = (e) => {

        const { screenX } = e.touches[0]

        setSwipeState({
            ...swipeState,
            startTime: e.timeStamp,
            startX: screenX,
        })


        setTouchState({
            ...touchState,
            startX: screenX,
        });
    }

    const handleTouchMove = (e) => {

        if (checkIfSwipe(e)) {
            return
        }

        const { screenX } = e.touches[0]

        const deltaX = Math.round(screenX - touchState.startX)

        setTouchState({
            ...touchState,
            endX: screenX,
            deltaX: deltaX,
        })

        // if last slide - no finger-follow slide forward
        if (carouselState.activeSlide === slidesData.length - 1 && deltaX < 0) {
            return
        }

        setCarouselState({
            ...carouselState,
            transitionDur: 0,
            translate: -deltaX + absTranslateState,
        });
    }

    const checkIfSwipe = (e) => {
        return  Math.round(e.timeStamp) - Math.round(swipeState.startTime) < 250
                &&
                Math.round(e.timeStamp) - Math.round(swipeState.startTime) > 100;
    }

    const handleTouchEnd = (e) => {

        /* Handles short swipe and in case
        it didn't occur makes slide to follow
        user's finger movement, then proceeds
        to either next or prev slide depending
        on movement direction*/

        if (checkIfSwipe(e)) {
            if (swipeState.startX - touchState.endX > 0) {
                nextSlide()
            } else {
                prevSlide()
            }
            return
        }

        touchState.deltaX < 0 ? nextSlide() : prevSlide()
    }

    return (
        <div
            className={'carousel'}
            css={carouselStyles}
        >
            <Content
                className={'content'}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}

                translate={carouselState.translate}
                transitionDur={carouselState.transitionDur}
                width={
                    carouselState.contentWidth !== 0 ? carouselState.contentWidth * slidesData.length : null
                }
            >
                {
                    slidesData.map((slideData, i) => (
                        <Slide
                            key={`slide-${i}-${new Date().getTime()}`}
                            slideData={slideData}
                            carouselState={carouselState}
                            setCarouselState={setCarouselState}
                        />
                    ))
                }
            </Content>

            <Navigation
                direction={'left'}
                handleClick={prevSlide}
            />
            <Navigation
                direction={'right'}
                handleClick={nextSlide}
            />

            <Pagination
                slidesData={slidesData}
                activeSlide={carouselState.activeSlide}
                carouselState={carouselState}
                setCarouselState={setCarouselState}
            />
        </div>
    )
}

export default Carousel;
