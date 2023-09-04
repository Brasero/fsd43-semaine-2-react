import React from 'react'

const UserList = ({list}) => {

    return (
        <ul>
            {
                list.map((user, index) => {
                    return (
                        <li key={index}>
                            {user}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default UserList;