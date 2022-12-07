
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { deleteUser, fetchUsers, updateUser } from '../../store/UserSlice';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import AppButton from '../button/AppButton';



export default function UserCard({ user }) {
    const dispatch = useDispatch()

    const deleteSingleUser = () => {
        dispatch(deleteUser(user))
        dispatch(fetchUsers())
    }

    const [nameInput, setNameInput] = useState(false)
    const [ageInput, setAgeInput] = useState(false)
    const [genderInput, setGenderInput] = useState(false)
    const [emailInput, setEmailInput] = useState(false)

    const [updatedName, setUpdatedName] = useState(user.name)
    const [updatedAge, setUpdatedAge] = useState(user.age)
    const [updatedGender, setUpdatedGender] = useState(user.gender)
    const [updatedEmail, setUpdatedEmail] = useState(user.email)


    const closeInput = () => {
        setNameInput(false)
        setAgeInput(false)
        setGenderInput(false)
        setEmailInput(false)
    }

    const obj = {
        name: updatedName,
        age: updatedAge,
        gender: updatedGender,
        email: updatedEmail,
        id: user._id
    }

    const updateSingleUser = () => {
        dispatch(updateUser(obj))
        dispatch(fetchUsers())
        setNameInput(false)
        setAgeInput(false)
        setGenderInput(false)
        setEmailInput(false)
    }

    return (
        <Box sx={{ width: 300 }}>
            <Card variant="outlined">
                <CardContent>
                    {
                        nameInput ?
                            <TextField
                                onChange={(e) => setUpdatedName(e.target.value)}
                                autoFocus
                                margin="dense"
                                id="name"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={updatedName}
                            />
                            :
                            <Typography variant="h6" component="div" mb={1} onClick={() => setNameInput(true)}>
                                Name: {user.name}
                            </Typography>

                    }

                    {
                        ageInput ?
                            <TextField
                                onChange={(e) => setUpdatedAge(e.target.value)}
                                autoFocus
                                margin="dense"
                                id="name"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={updatedAge}
                            />
                            :
                            <Typography variant="body2" mb={1} onClick={() => setAgeInput(true)}>
                                Age: {user.age}
                            </Typography>
                    }

                    {
                        genderInput ?
                            <TextField
                                onChange={(e) => setUpdatedGender(e.target.value)}
                                autoFocus
                                margin="dense"
                                id="name"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={updatedGender}
                            />
                            :
                            <Typography variant="body2" mb={1} onClick={() => setGenderInput(true)}>
                                Gender: {user.gender}
                            </Typography>
                    }

                    {
                        emailInput ?
                            <TextField
                                onChange={(e) => setUpdatedEmail(e.target.value)}
                                autoFocus
                                margin="dense"
                                id="name"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={updatedEmail}
                            />
                            :
                            <Typography variant="body2" mb={1} onClick={() => setEmailInput(true)}>
                                Email: {user.email}
                            </Typography>
                    }

                </CardContent>
                <CardActions>
                    <AppButton text={'Delete'} onClick={deleteSingleUser} />
                    {nameInput || ageInput || genderInput || emailInput ?
                        <>
                            <AppButton text={'Update'} onClick={updateSingleUser} />
                            <AppButton text={'Cancel'} onClick={closeInput} />
                        </>
                        :
                        null
                    }

                </CardActions>
            </Card>
        </Box>
    );
}
