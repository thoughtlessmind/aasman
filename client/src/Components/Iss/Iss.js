import React, { useState, useEffect } from 'react';
import { Box, makeStyles, createStyles, Typography, CircularProgress } from '@material-ui/core';
import axios from 'axios';

const Iss  = () => {

    const classes = usestyles()
    const [issData, setIssData] = useState()

    const getIssPosition = async () =>{
        const res = await axios({
            method: 'GET',
            url: 'http://api.open-notify.org/iss-now.json'
        }).then(res=> {
            console.log('response', res)
            setIssData(res.data)
        })
        
    }

    useEffect(()=>{
        console.log('issdata', issData);
        
    },[issData])

    useEffect(()=>{
        getIssPosition()
    },[])


    return(
        <Box className={classes.mainContainer}>
            {
                issData ?
                    <Box className={classes.subContainer}>
                        <Typography variant='h4' align='center'>International Space Station</Typography>
                        <Box style={{marginTop: '1.5rem', paddingLeft: '25px'}}>
                            <Typography align='left'>{`Currently going over city`}</Typography>
                            {/* <Typography>Position</Typography> */}
                            <Box className={classes.issPositionContainer}>
                                <Typography>Position: {issData.iss_position.latitude}, {issData.iss_position.longitude} (Lat, Long)</Typography>
                            </Box>
                        </Box>

                    </Box>:
                    <CircularProgress size={19} style={{position: 'absolute', top: '48%', left:'50%'}}/>
            }
            <Box className={classes.subContainer}>
                <Typography variant='h5'>People in space</Typography>
                <Typography>{3}</Typography>
            </Box>
        </Box>
    );
}

const usestyles = makeStyles(theme =>
    createStyles({
        mainContainer:{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            color: '#fff',
            justifyContent: 'space-between',
            padding: '2rem'
        },
        subContainer:{
            width: '30%',
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '1px 1px 3px 1px #848484a6'
        },
        issPositionContainer:{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '7px 0'
        }
    })
)

export default Iss ;