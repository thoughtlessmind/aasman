import React , {useState, useEffect} from 'react';
import { Box } from '@material-ui/core';
import Apod from '../Apod/Apod';
import AppTopBar from '../AppBar/AppTopBar'
import Iss from '../Iss/Iss';





class MainPage extends React.Component{
    render(){
        return(
            <Box>
                <AppTopBar/>
                <Apod/>
                <Iss/>
            </Box>
        )
    }
}



export default MainPage ;
 