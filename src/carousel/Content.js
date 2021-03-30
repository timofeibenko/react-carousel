import React from 'react';
import styled from '@emotion/styled';

    /** @jsx jsx */

const Content = styled.div`
    display: flex;
    
    height: 100%;
    width: ${props => props.width}px;
    
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transitionDur}s;
    
    overflow: hidden;
`;

export default Content;
