import React from 'react'
import { Outlet } from 'react-router-dom'
import {TeacherNavbar} from '../../../components/Notes/Teacher/TeacherNavbar'
const TeacherLayout = () => { 

    return (
        <>
        <TeacherNavbar/>
        <Outlet/>
        </>
    )

}

export default TeacherLayout