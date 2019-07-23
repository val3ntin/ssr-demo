import React from 'react'
import styled from '@emotion/styled'
import { spaceCadet, white } from '../utils/colors'

const StyledFooter = styled.footer`
    display: block;
    line-height: 50px;
    height: 50px;
    background-color: ${spaceCadet};
    color: ${white};
    width: 100%;
`
export default () => (
    <StyledFooter>
        this is a footer
    </StyledFooter>
)