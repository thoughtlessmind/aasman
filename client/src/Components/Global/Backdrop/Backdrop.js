import React from 'react';
import { Box, makeStyles, createStyles, Paper } from '@material-ui/core';

const Backdrop  = (props) => {
    const {open, closeHandler} = props
    const classes = usestyles()


    return(
        <Paper className={open? classes.backdropClass : classes.hidden} onClick={closeHandler}>
            {props.children}
        </Paper>
    );
}

const usestyles = makeStyles(theme =>
    createStyles({
        backdropClass:{
            position: 'fixed',
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            zIndex: '100',
            top: '0',
            left: '0'
        },
        hidden:{
            display: 'none'
        }
    })
)

export default Backdrop ;