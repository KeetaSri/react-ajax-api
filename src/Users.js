import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function UserList() {
    // setUsers for getting all the data api from url
    // users is for display it all in the TableCell using .map()
    const [users, setUsers] = useState([]);
    useEffect(() => {
        UsersGet()
    }, [])
    
    //function for calling api GET
    const UsersGet = () => {
        fetch("http://13.229.77.246:3000/user/all/1")
        .then(res => res.json())
        .then(
            (result) => {
            setUsers(result)
            }
        )
    }

    return (
        <Container sx={{ p:20 }} maxWidth="lg">
        <Paper sx={{ p:20 }}>
            <Box display="flex">
            <Box flexGrow={1}>
                <Typography align="center" component="h2" variant="h6" color="primary" gutterBottom>
                USERS
                </Typography>
            </Box>
            </Box>
            <TableContainer component={Paper}>
            <TableCell aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="left">First</TableCell>
                <TableCell align="left">Last</TableCell>
                <TableCell align="center">Tel</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">DoB</TableCell>
                <TableCell align="center">age</TableCell>
                <TableCell align="center">Dept</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {/* Display data here in each row through .map() */}
                {users.map((user) => (
                <TableRow key={user.ID}>
                    <TableCell align="center">{user.id}</TableCell>
                    <TableCell align="left">{user.name}</TableCell>
                    <TableCell align="left">{user.lastname}</TableCell>
                    <TableCell align="center">{user.tel}</TableCell>
                    <TableCell align="center">{user.status}</TableCell>
                    <TableCell align="center">{user.birthday}</TableCell>
                    <TableCell align="center">{user.age}</TableCell>
                    <TableCell align="center">{user.department}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </TableCell>
        </TableContainer>
        </Paper>
        </Container>
        
    );
}