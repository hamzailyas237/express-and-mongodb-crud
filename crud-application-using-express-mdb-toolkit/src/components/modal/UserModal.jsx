
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { fetchUsers, postUser } from '../../store/UserSlice';
import { useDispatch } from 'react-redux';
import AppButton from '../button/AppButton';

export default function UserModal() {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const obj = {
        name,
        age,
        gender,
        email,
    }

    const createUser = () => {
        if (name !== '' && age !== '' && gender !== '' && email !== '') {
            dispatch(postUser(obj))
            dispatch(fetchUsers())
            handleClose();
        }
        else {
            alert('Please fill all the fields')
        }
    }

    const addPost = () => {
        createUser()
    }

    return (
        <div>
            <AppButton color={'white'} text={'Add User'} onClick={handleClickOpen}/>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>ADD NEW USER</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To generate a user card to this website, please enter all the details here
                    </DialogContentText>
                    <TextField
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Enter name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        onChange={(e) => setAge(e.target.value)}
                        margin="dense"
                        id="name"
                        label="Enter age"
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        onChange={(e) => setGender(e.target.value)}
                        margin="dense"
                        id="name"
                        label="Enter gender"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        margin="dense"
                        id="name"
                        label="Enter email"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <AppButton text={'Cancel'} onClick={handleClose} />
                    <AppButton text={'Add User'} onClick={addPost} />
                </DialogActions>
            </Dialog>
        </div>
    );
}