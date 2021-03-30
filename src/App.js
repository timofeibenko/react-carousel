import React from 'react';
import Carousel from "./carousel/Carousel";
import { css, jsx } from "@emotion/react";

/** @jsx jsx */

const slidesData = [
    {
        title: 'Slide 1',
        description: 'Lorem ipsum sut dolor atmet and whatever comes after that',
    },

    {
        title: 'Slide 2',
        description: 'Lorem ipsum sut dolor atmet and whatever comes after that',
    },

    {
        title: 'Slide 3',
        description: 'Lorem ipsum sut dolor atmet and whatever comes after that',
    },

    {
        title: 'Slide 4',
        description: 'Lorem ipsum sut dolor atmet and whatever comes after that',
    },

    {
        title: 'Slide 5',
        description: 'Lorem ipsum sut dolor atmet and whatever comes after that',
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
