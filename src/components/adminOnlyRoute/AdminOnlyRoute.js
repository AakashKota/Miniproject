import React from 'react'
import { useSelector } from 'react-redux'
import { selectEmail } from '../../redux/slice/authSlice'

const AdminOnlyRoute = ({children}) => {
    const userEmail=useSelector(selectEmail)

    if(userEmail === "admin@demo.com"){
        return children
    }
    return null;
}

export default AdminOnlyRoute