import React from 'react'
import styled from '@emotion/styled'

import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'


const StyledPage = styled.div`;
`

export default () => {
    return <StyledPage>
        <Header />
        <Content />
        <Footer />
    </StyledPage>
};