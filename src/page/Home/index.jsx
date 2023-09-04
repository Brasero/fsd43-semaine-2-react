import React, {useState} from "react";

import Form from '../../component/Form'
import UserList from '../../component/UserList'

const Home = () => {

    const [list, setList] = useState([
        'Pierre',
        'Paul',
        'Jacques'
    ])

    const handleAdd = (value) => {
        const copy = [...list]
        copy.push(value)
        setList(copy)
    }

    return (
        <>
            <Form handleAdd={handleAdd}/>
            <UserList list={list} />
        </>
    )

}

export default Home;