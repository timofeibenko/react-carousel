import React from 'react';
import { css, jsx } from '@emotion/react';

/** @jsx jsx */

const Slide = (props) => {

    const { slideData, slideStyles } = props;

    return (
        <div
            css={slideStyles}
            className={'slide'}
        >
            <h2>{slideData.title}</h2>
            <p>{slideData.description}</p>
            {/*<img src={slideData.img} alt="capybara"/>*/}
        </div>
    )
};

export default Slide;
