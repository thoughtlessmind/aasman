import React , {useState, useEffect} from 'react';
import { Box, makeStyles, createStyles, Typography, Paper, Grid } from '@material-ui/core';
import axios from 'axios'

const Customers  = () => {
    const[customers, setCustomers] = useState([])
    const[testData, setTestData] = useState([])



    useEffect(()=>{
        fetch("/testApi")
            .then(res => res.json())
            .then(data => setTestData(data))
    },[])
    const apiKey = 'gvLAFHhWfMdinBAuKFDs7VbBYNho9c6bHsVzCgRc'


    const classes = usestyles()

    const testCaller = () =>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then((res)=>{
                setCustomers(res)
            })
        }

    useEffect(()=>{
        console.log('call in js', customers)
    },[customers])

    useEffect(()=>{
        testCaller()
    },[])

    return(
        <Box>
            <Typography variant='h2'>
                test image
            </Typography>
            { testData.length === 0 || testData === undefined ?
                <Typography variant='p'>image is being loaded</Typography> :
                <Grid container>
                    <Grid item md={8}>
                        <img src= {testData.url} height="100%" alt="nasa image of the day"/> 
                    </Grid>

                    <Grid item md={4}>
                        <Typography variant='h5' align='left' className={classes.mainText}>
                            {testData.explanation}
                        </Typography>
                    </Grid>
                </Grid>
            }
        </Box>
    );
}

const usestyles = makeStyles(theme =>
    createStyles({
        mainText:{
            fontSize: '16px'
        }
    })
)

export default Customers ;

{/**
    design wise simple page in laout and different tabs for the different types of the informations 
    - on landing page nasa image of the day
    - tabs list
        

**/}