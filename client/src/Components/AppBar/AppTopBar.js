import React from 'react';
import { makeStyles, createStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

const AppTopBar  = () => {

    const classes=usestyles()

    return(
        <AppBar position="static"> 
            <Toolbar>
                <Typography variant="h5" className={classes.mainTitle}>
                    Aasman
                </Typography>
                < Typography >
                    option 1 
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

const usestyles = makeStyles(theme =>
    createStyles({
        mainTitle: {
            flexGrow: 1
        },
    })
)

export default AppTopBar ;