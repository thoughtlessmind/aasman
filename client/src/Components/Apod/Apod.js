import React , {useState, useEffect} from 'react';
import {
    Box,
    makeStyles,
    createStyles,
    Typography,
    Grid,
    CircularProgress,
    useFormControl
} from '@material-ui/core';


const Apod  = () => {
    const[responseData, setResponseData] = useState([])
    const[responseData2, setResponseData2] = useState([])
    const [responseData3, setResponseData3] = useState([])


    const classes = usestyles()

    useEffect(()=>{
        fetch("/apod")
            .then(res => res.json())
            .then(data => setResponseData(data))
    },[])
    
    useEffect(()=>{
        fetch("https://api.spacexdata.com/v3/roadster")
            .then(res => setResponseData2(res))
            .then(res => console.log(res))
    },[])


    useEffect(()=>{
        console.log(responseData2)
    },[responseData2])

    useEffect(()=>{
        fetch("http://api.open-notify.org/astros.json")
            .then(res => setResponseData3(res.body))
    },[])

    useEffect(()=>{
        console.log(responseData3)
    },[responseData3])
    const apiKey = 'gvLAFHhWfMdinBAuKFDs7VbBYNho9c6bHsVzCgRc'




    return(

        <Box className={classes.mainContainer}>
            <Box>
                <Typography className={classes.header} variant="h2">
                    Astronomy Picture of the Day
                </Typography>
                {
                    responseData.length ==0 ?
                        <CircularProgress className={classes.loaderStyle} size={21}/>:
                        responseData.media_type === 'image'?
                            <img src= {responseData.url} className={classes.apoImage} height="100%" alt="nasa image of the day"/>:
                            <embed height='400px' width='700px' src={`${responseData.url}&autoplay=1`}/>
                }
            </Box>
            <Box>
                <Typography variant='h5' align='left' id="temp" className={classes.mainText}>
                    {responseData.explanation}
                </Typography>
            </Box> 
        </Box>
    );
}

const usestyles = makeStyles(theme =>
    createStyles({
        mainContainer:{
            height: '80vh',
            display: 'flex',
            padding: '1.5rem'

        },
        header:{
            fontSize: '1.2rem'
        },
        mainText:{
            fontSize: '16px'
        },
        loaderStyle:{
            position: 'absolute',
            top: '50%',
            right: '50%'
        },
        apoImage:{
            height: 'auto',
            maxHeight: '80vh'
        },
        dark:{
            backgroundColor: '#000',
            color: '#fff'
        },
        [theme.breakpoints.down('md')]:{
            mainContainer:{
                flexDirection: 'column',
                padding: '0'
            },
            apoImage:{
                height: 'auto',
                maxHeight: '80vh',
                maxWidth: '100vw'
            }
        }
    })
)

export default Apod ;
