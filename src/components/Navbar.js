import { AppBar, InputBase, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../Theme';

export default function Navbar({ setInputText }) {
    const classes = useStyles();

    return (
        <AppBar className={classes.color}>
            <Toolbar>
                <Typography className={classes.title} id="title" variant="h5" noWrap>
                    Dean Geva
            </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        onChange={e => setInputText(e.target.value)}
                        placeholder="Search for users…"
                        classes={{
                            root: classes.inputRoot
                        }}
                        id="search-input"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Toolbar>
        </AppBar>
    )
}
