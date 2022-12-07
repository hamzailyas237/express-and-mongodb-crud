

import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../../components/card/UserCard'
import Loader from '../../components/loader/Loader'
import Navbar from '../../components/navbar/Navbar'
import { fetchUsers } from '../../store/UserSlice'

const Home = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const { data, status } = useSelector(state => {
        return state.user
    })

    if (status === 'loading') {
        return <Loader />
    }

    return (
        <div>

            <Navbar />
            {/* <Modal2/> */}


            <Grid container spacing={2}>
                {data.users && data.users.map((user, index) => (
                    <Grid item key={index} m={3}>
                        <UserCard user={user} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Home