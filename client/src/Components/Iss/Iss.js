import React, { useState, useEffect } from 'react';
import { Box, makeStyles, createStyles, Typography } from '@material-ui/core';
import axios from 'axios';

const Iss  = () => {

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
        <Box style={{backgroundColor: 'blue', color: '#fff'}}>
            {
                issData ?
                    <Box>
                        <Typography>ISS Details</Typography>
                        <Typography>{`Currently going over city`}</Typography>
                        <Typography>Position</Typography>
                        <Box>
                            <Typography>Latitude:{issData.iss_position.latitude}</Typography>
                            <Typography>Longitude:{issData.iss_position.longitude}</Typography>
                        </Box>

                    </Box>:
                    <p >loadingData</p>
            }
        </Box>
    );
}

const usestyles = makeStyles(theme =>
    createStyles({

    })
)

export default Iss ;