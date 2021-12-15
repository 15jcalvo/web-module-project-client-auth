import React, { useEffect } from 'react'
import axios from 'axios'
import { role } from '../mocks/credentials'

const Logout = (props) => {
    useEffect(()=>{
        const token = localStorage.getItem('token')
        const role = localStorage.getItem('role')
        const username = localStorage.getItem('username')
        const credentials = {
            username: username,
            role: role,
            token: token,
        }
        axios.post('http://localhost:9000/api/logout',{
            credentials: credentials
        })
            .then(res=>{
                console.log(res)
                props.history.push('/')
            })
            .catch(err=>{
                console.log(err)
            })
    },[])
    return(<div></div>)
}

export default Logout