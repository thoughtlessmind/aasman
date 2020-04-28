import React , {useState, useEffect} from 'react';
import { Box } from '@material-ui/core';
import Apod from '../Apod/Apod';
import AppTopBar from '../AppBar/AppTopBar'


const MainPage  = () => {
    // const classes = usestyles()

    return(
        <Box>
            <AppTopBar/>
            <Apod/>
        </Box>
    );
}


export default MainPage ;
 