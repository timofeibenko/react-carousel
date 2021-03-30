import React from 'react';
import { css, jsx } from '@emotion/react';

/** @jsx jsx */

const Dot = (props) => {
    const {
        active,
        handleDotClick
    } = props;

    return (
        <span
            onClick={handleDotClick}
            css={css`
                padding: 7px;
                margin-right: 5px;
                border-radius: 50%;
                background: ${active ? '#7b7878' : '#FFFFFF'};
                border: 3px solid #FFFFFF;
                opacity: .7;
                cursor: pointer;
                transition: opacity .2s ease;
                
                &:hover {
                  opacity: .8;
                }
            `}
        />
    )
};

const Pagination = (props) => {

    const {
        slidesData,
        activeSlide,
        carouselState,
        setCarouselState
    } = props;

    const handleDotClick = (dotIndex) => {
        if (dotIndex > carouselState.activeSlide) {
            setCarouselState({
                ...carouselState,
                translate: carouselState.slideWidth * dotIndex,
                transitionDur: 0.4,
                activeSlide: dotIndex,
            })
        } else if (dotIndex < carouselState.activeSlide) {
            setCarouselState({
                ...carouselState,
                translate: carouselState.slideWidth * dotIndex,
                transitionDur: 0.4,
                activeSlide: dotIndex,
            })
        }
    };

    return (
        <div
            css={css`
                  position: absolute;
                  bottom: 25px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 100%;
            `}
        >
            {
                slidesData.map((slide, i) => (
                     <Dot
                         key={`dot-${i}-${new Date().getTime()}`}
                         active={activeSlide === i}
                         handleDotClick={() => handleDotClick(i)}
                    />
                ))
            }
        </div>
    )
};

export default Pagination;
