import { fade, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2rem',
        paddingBottom: '5rem',
        [theme.breakpoints.up('sm')]: {
            padding: '8rem'
        },
    },
    color: {
        background: 'linear-gradient(45deg, #087aea 10%, #22a8fc 90%)',
        boxShadow: '0px 0px 5px 2px #fff',
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.25),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.35),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `50px`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '40ch',
        },
    },
    cardRail: {
        height: '3.5rem',
        width: '100%',
        position: 'absolute',
        background: 'linear-gradient(45deg, #087aea 10%, #22a8fc 90%)'
    },
    name: {
        paddingLeft: '.3rem'
    },
    button: {
        transform: 'translateX(-50%)',
        position: 'relative',
        left: '50%',
        top: '3rem',
        width: '50%',
        padding: '.6rem 0',
        color: '#1d9ff9',
        border: '#1d9ff9 1px solid',
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.75),
            border: '#22a8fc 1px solid',
        },
    }
}));

export default useStyles;