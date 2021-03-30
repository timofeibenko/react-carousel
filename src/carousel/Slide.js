import React from 'react';
import { css, jsx } from '@emotion/react';

/** @jsx jsx */

const Slide = (props) => {

    const { slideData } = props;

    const slideStyles = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: 0 1rem;
        text-align: center;
        background-color: #5b82a3;
        pointer-events: none;
        
        & img {
            height: 50%;
            width: 50%;
            object-fit: contain;
        }
    `;

    return (
        <div
            css={slideStyles}
        >
            <h2>{slideData.title}</h2>
            <p>{slideData.description}</p>
            {/*<img src={slideData.img} alt="capybara"/>*/}
        </div>
    )
};

export default Slide;
