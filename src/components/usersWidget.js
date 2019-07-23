import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { spaceCadet } from '../utils/colors'
import UserCard from './userCard'
import { getUsers } from '../api/users'

const StyledUsersWidget = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    background-color: ${spaceCadet};
`;

const emptyUser = {
    name: {},
    cell: '',
}

// 2
const generatePlaceHolders = number => {
    let arr = [];
    while (arr.length <= number) {
        arr.push({
            ...emptyUser,
            cell: arr.length
        });
    }

    return arr;
}
export default () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const users = await getUsers();
        users && setUsers(users);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <StyledUsersWidget>
            {/* // 2 */}
            {users.length === 0 && generatePlaceHolders(50).map(u => <UserCard {...u} key={u.cell} />)}
            {users.map(u => <UserCard {...u} key={u.cell} />)}
        </StyledUsersWidget>
    )
}