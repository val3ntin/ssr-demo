import React from 'react'
import styled from '@emotion/styled'
import { spaceCadet, white } from '../utils/colors'

const StyledHeader = styled.header`
    line-height: 50px;
    height: 50px;
    background-color: ${spaceCadet};
    color: ${white};
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;

`

export default () => (
    <StyledHeader>
        this is a header
    </StyledHeader>
)