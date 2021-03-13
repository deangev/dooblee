import React from 'react'
import * as Gi from 'react-icons/gi'
import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import useStyles from '../Theme';

export default function User({ user, index }) {
    const classes = useStyles();
    const createMarkup = html => {
        return { __html: html }
    }

    return (
        <Grid key={index} item lg={4} md={6} xs={12} className="animate__animated animate__zoomIn">
            <Card className={classes.card} id="card">
                <div className={classes.cardRail}></div>
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
                    />
                    <Typography variant="body2" color="textSecondary" component="p">{user.email}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
