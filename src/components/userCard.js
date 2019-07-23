import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { white, navyBlue, yongerBlue, spaceCadet, cornflowerBlue } from '../utils/colors';

const StyledUser = styled.div`
    display: flex;
    margin: 10px 10px 10px 20px;
    width: 300px;
    align-items: center;
    border-radius: 45px;
    box-shadox: 1px 2px 1px ${navyBlue};
    opacity: 0.8;
    transition: transform 0.2s ease-out;

    &:hover {
        opacity: 1;
        transform: translateX(5px) scale(1.05);
    }
`

const StyledPicture = styled.div`
    display: block;
    width: 70px;
    height: 70px;
    background: ${cornflowerBlue};
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 50%;
`

const StyledName = styled.div`
    margin: 10px;
    font-size: 24px;
    font-weight: 400;
    text-transform: capitalize;
    color: ${white};
    text-shadow: 1px 0px 0px ${spaceCadet};
    ${props => props.isEmpty && css`
        display: block;
        height: 24px;
        width: 200px;
        background: linear-gradient(to right, ${cornflowerBlue} 0%, ${navyBlue} 100% );
        opacity: 0.5;
    `}
`

export default ({name: {first = undefined, last = undefined}, picture}) => {
    return (
        <StyledUser>
            <StyledPicture src={picture && picture.thumbnail} />
            <StyledName isEmpty={(last === undefined || first === undefined)}>
                {first} {last}
            </StyledName>
        </StyledUser>
    )
}