import React from 'react'
import styled from '@emotion/styled'

import Header from './../src/components/header'
import Footer from './../src/components/footer'
import Content from './../src/components/content'

import { getUsers } from './../src/api/users'


const StyledPage = styled.div`;
`

const Page = ({ initialData }) => {
    return <StyledPage>
        <Header />
        <Content users={initialData.users} />
        <Footer />
    </StyledPage>
};

Page.getInitialProps = async () => {
    const users = await getUsers();
    return {
        initialData: {
            users
        }
    };
}

export default Page;