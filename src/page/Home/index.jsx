import React, {useState} from "react";

import Form from '../../component/Form'
import UserList from '../../component/UserList'

const Home = () => {

    return (
        <>
            <Form handleAdd={handleAdd}/>
            <UserList list={list} />
        </>
    )

}

export default Home;