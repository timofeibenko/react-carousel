import React from 'react';
import Carousel from "./carousel/Carousel";
import { css, jsx } from "@emotion/react";

import capybara_1 from './img/capybara-1.png';
import capybara_2 from './img/capybara-2.png';
import capybara_3 from './img/capybara-3.png';
import capybara_4 from './img/capybara-4.png';
import capybara_5 from './img/capybara-5.png';

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
            />
        </div>
    );
}

export default App;
