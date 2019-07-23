import React from 'react'
import styled from '@emotion/styled'

import Header from './../src/components/header'
import Footer from './../src/components/footer'
import Content from './../src/components/content'


const StyledPage = styled.div`;
`

export default () => {
    return <StyledPage>
        <Header />
        <Content />
        <Footer />
    </StyledPage>
};