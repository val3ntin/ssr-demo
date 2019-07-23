import React from 'react'
import styled from '@emotion/styled'
import UsersWidget from './usersWidget'
import { yongerBlue, white } from '../utils/colors'

const StyledContent = styled.section`
    display: block;
    min-height: 80vh;
    background-color: ${yongerBlue};
    color: ${white};
    width: 100%;
`

export default ({users}) => (
    <StyledContent>
        <UsersWidget users={users}/>
    </StyledContent>
)