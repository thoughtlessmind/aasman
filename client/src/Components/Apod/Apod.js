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
            <Box className={classes.apodContainer}>
                {
                    responseData.length ==0 ?
                        <CircularProgress className={classes.loaderStyle} size={21}/>:
                        responseData.media_type === 'image'?
                            <img src= {responseData.url} className={classes.apoImage} alt="nasa image of the day"/>:
                            <embed height='400px' width='700px' src={`${responseData.url}&autoplay=1`}/>
                }
            </Box>
            <Box>
                <Typography className={classes.header} variant="h1">
                    Astronomy Picture of the Day
                </Typography>
                <Box className={classes.apodTextConatiner}>
                    <Typography variant="h4" align='left' className={classes.apodTitle}>
                        {responseData.title}
                    </Typography>
                    <Typography variant='h5' align='left' id="temp" className={classes.mainText}>
                        {responseData.explanation}
                    </Typography>
                </Box>
                
            </Box> 
        </Box>
    );
}

const usestyles = makeStyles(theme =>
    createStyles({
        mainContainer:{
            height: '80vh',
            display: 'flex',
            padding: '1.5rem',
            justifyContent: 'center',
            flexDirection: 'row-reverse',
            width: '100%',
            color: 'rgba(255,255,255,0.9)'

        },
        header:{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: '700'
        },
        apodTextConatiner:{
            marginTop: '2rem'
        },
        apodTitle:{
            fontSize: '2rem'
        },
        mainText:{
            fontSize: '16px',
            padding: '5px 15px 5px 5px',
            lineHeight: '1.5',
            wordSpacing: '0.6px',
            letterSpacing: '-0.3px'
        },
        loaderStyle:{
            position: 'absolute',
            top: '50%',
            right: '50%',
            color: 'rgba(255,255,255,0.9)'
        },
        apodContainer:{
            width: '60%',
            height: 'auto',
            maxWidth: '500px',
            minWidth: '400px'

        },
        apoImage:{
            height: '100%',
            // width: 'auto',
            // maxHeight: '80vh',
            imageRendering: 'pixelated'
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
                width: '80vw'
            }
        }
    })
)

export default Apod ;
