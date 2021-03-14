import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Grid } from '@material-ui/core';
import useStyles from './Theme';
import Navbar from './components/Navbar';
import User from './components/User';
import './animation.css'


function App() {
  const [users, setUsers] = useState();
  const [filteredUsers, setFilteredUsers] = useState();
  const [page, setPage] = useState(1);
  const [inputText, setInputText] = useState();
  const classes = useStyles();

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await Axios.get('https://randomuser.me/api/?results=100')
      const newData = usersData.data.results.map(user => {
        return {
          ...user,
          fullName: user.name.first + ' ' + user.name.last
        }
      })
      document.getElementById('loader').style.display = 'none'
      setUsers(newData)
      setFilteredUsers(newData)
    }
    getUsers()
  }, [])

  useEffect(() => {
    if (!inputText || (inputText && inputText.length === 0)) {
      setPage(1)
      setFilteredUsers(users)
    } else {
      setPage(1)
      const newArr = users && users.filter(item =>
        item.fullName.toLowerCase().includes(inputText.toLowerCase())
      ).map(item => {
        let fullNameHighlight = item.fullName.replace(
          new RegExp(inputText, 'gi'),
          match => `<mark style="background: #1d9ff9; color: white">${match}</mark>`
        )
        return {
          ...item,
          fullName: fullNameHighlight
        }
      })
      setFilteredUsers(newArr)
    }
  }, [inputText, users])

  return (
    <div className={classes.root}>
      <Navbar setInputText={setInputText} />
      <Grid container spacing={3} id="users-container">
        <div id="loader">
          <div id="shadow"></div>
          <div id="box"></div>
        </div>
        {filteredUsers && filteredUsers.map((user, index) => {
          return (
            (page * 9 > index) && (
              <User user={user} />
            )
          )
        })}
      </Grid>
      {page < (filteredUsers && filteredUsers.length / 9) && <Button variant="outlined" className={classes.button} onClick={() => setPage(prevValue => prevValue + 1)}>Load More</Button>}
    </div>
  );
}

export default App;
