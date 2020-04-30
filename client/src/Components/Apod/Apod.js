import React , {useState, useEffect} from 'react';
import {
    Box,
    makeStyles,
    createStyles,
    Typography,
    Grid,
    CircularProgress
} from '@material-ui/core';


const Apod  = () => {
    const[responseData, setResponseData] = useState([])

    const classes = usestyles()

    useEffect(()=>{
        fetch("/apod")
            .then(res => res.json())
            .then(data => setResponseData(data))
    },[])
    const apiKey = 'gvLAFHhWfMdinBAuKFDs7VbBYNho9c6bHsVzCgRc'

    

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

    useEffect(()=>{
        fetch('/astros')
            .then(res => res.json())
            .then(data => console.log(data))
    },[])


    return(

        <Box className={classes.mainContainer}>
            <Box>
                {
                    responseData.length ==0 ?
                        <CircularProgress className={classes.loaderStyle} size={21}/>:
                        responseData.media_type === 'image'?
                            <img src= {responseData.url} className={classes.apoImage} height="100%" alt="nasa image of the day"/>:
                            <embed height='400px' width='700px' src={`${responseData.url}&autoplay=1`}/>
                }
            </Box>
            <Box>
                <Typography variant='h5' align='left' className={classes.mainText}>
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
            width: 'fit-content'
        }
    })
)

export default Apod ;
