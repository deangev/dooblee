import React, { useEffect, useState } from 'react'
import * as Gi from 'react-icons/gi'
import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import useStyles from '../Theme';
import Axios from 'axios';

export default function User({ user }) {
    const classes = useStyles();
    const createMarkup = html => {
        return { __html: html }
    }
    const [flag, setFlag] = useState();

    useEffect(() => {
        const getFlag = async (country) => {
            const flagData = await Axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
            setFlag(flagData.data[0].flag)
        }
        getFlag(user.location.country)
    }, [user.location.country])

    return (
        <Grid item lg={4} md={6} xs={12} className="animate__animated animate__zoomIn">
            <Card className={classes.card} id="card">
                <div className={classes.cardRail}></div>
                <img id="flag-image" src={flag} alt="flag" />
                <Avatar alt="avatar-image" src={user.picture.medium} id="avatar-image" />
                <CardContent>
                    {user.gender === 'male' ? <Gi.GiMale size={25} color="#1d9ff9" /> : <Gi.GiFemale size={25} color="#f14668" />}
                    <Typography
                        gutterBottom
                        variant="h5"
                        display="inline"
                        component="h2"
                        className={classes.name}
                        dangerouslySetInnerHTML={createMarkup(`${user.fullName}`)}
                    /><Typography
                        gutterBottom
                        variant="h5"
                        display="inline"
                        component="h2"
                        style={{padding: 0}}
                        className={classes.name}
                    >, {user.dob.age}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{user.email}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
