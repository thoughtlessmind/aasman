import React , {useState, useEffect} from 'react';
import { Box, makeStyles, createStyles, Typography, Paper, Grid } from '@material-ui/core';
// import axios from 'axios'

const Apod  = () => {
    const[responseData, setResponseData] = useState([])

    useEffect(()=>{
        fetch("/apod")
            .then(res => res.json())
            .then(data => setResponseData(data))
    },[])
    const apiKey = 'gvLAFHhWfMdinBAuKFDs7VbBYNho9c6bHsVzCgRc'

    useEffect(()=>{
        console.log('whole data', responseData)
    })

    const classes = usestyles()

    // const testCaller = () =>{
    //     axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    //         .then((res)=>{
    //             setCustomers(res)
    //         })
    //     }
    // 
    // useEffect(()=>{
    //     testCaller()
    // },[])

    return(
        <Box>
            { responseData.length === 0 || responseData === undefined ?
                <Typography>image is being loaded</Typography> :
                <Grid container>
                    <Grid item md={8}>
                        {
                            responseData.media_type === 'image' ?
                                <img src= {responseData.url} height="100%" alt="nasa image of the day"/>:
                                <embed height='400px' width='700px' src={`${responseData.url}&autoplay=1`}/>
                        }
                        
                    </Grid>

                    <Grid item md={4}>
                        <Typography variant='h5' align='left' className={classes.mainText}>
                            {responseData.explanation}
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

export default Apod ;
