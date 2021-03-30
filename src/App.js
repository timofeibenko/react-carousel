import React from 'react';
import Carousel from "./carousel/Carousel";

import capybara_1 from './img/capybara-1.png';
import capybara_2 from './img/capybara-2.png';
import capybara_3 from './img/capybara-3.png';
import capybara_4 from './img/capybara-4.png';
import capybara_5 from './img/capybara-5.png';
import { css, jsx } from "@emotion/react";

/** @jsx jsx */

const slidesData = [
    {
        title: 'Slide 1',
        description: 'Lorem ipsum sut dolor atmet and whatever comes after that',
        img: capybara_1,
    },
    {
        title: 'Slide 2',
        description: 'Lorem ipsum sut dolor atmet and whatever comes after that',
        img: capybara_2,
    },
    {
        title: 'Slide 3',
        description: 'Lorem ipsum sut dolor atmet and whatever comes after that',
        img: capybara_3,
    },
    {
        title: 'Slide 4',
        description: 'Lorem ipsum sut dolor atmet and whatever comes after that',
        img: capybara_4,
    },
    {
        title: 'Slide 5',
        description: 'Lorem ipsum sut dolor atmet and whatever comes after that',
        img: capybara_5,
    },
]

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


const App = () => {
    return(
        <div style={
                        {
                            height: '100vh',
                            backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
                            fontFamily: 'Poppins',
                        }
            }
        >
            <h2 style={
                            {
                                margin: 0,
                                padding: '2rem',
                                textAlign: "center",
                            }
            }
            >React Carousel
            </h2>
            <Carousel
                slidesData={slidesData}
                slideStyles={slideStyles}
            />
        </div>
    );
}

export default App;
