import React , {useEffect} from 'react';
import {
    Box,
    makeStyles,
    createStyles,
    Typography,
    CircularProgress,
} from '@material-ui/core';


const Apod  = (props) => {
    
    const {apodData} = props

    const classes = usestyles()

    useEffect(()=>{
        console.log('apodData', apodData);
    },[apodData])

    const apiKey = 'gvLAFHhWfMdinBAuKFDs7VbBYNho9c6bHsVzCgRc'




    return(

        <Box className={classes.mainContainer}>
            <Box className={classes.apodContainer}>
                {
                    !apodData ?
                        <CircularProgress className={classes.loaderStyle} size={21}/>:
                        apodData.media_type === 'image'?
                            <img src= {apodData.url} className={classes.apoImage} alt={apodData.title}/>:
                            <embed height='400px' width='700px' src={`${apodData.url}&autoplay=1`}/>
                }
            </Box>
            <Box>
                <Typography className={classes.header} variant="h1">
                    Astronomy Picture of the Day
                </Typography>
                <Box className={classes.apodTextConatiner}>
                    <Typography variant="h4" align='left' className={classes.apodTitle}>
                        {apodData.title}
                    </Typography>
                    <Typography variant='h5' align='left' id="temp" className={classes.mainText}>
                        {apodData.explanation}
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
            color: 'rgba(255,255,255,0.9)',
            animationName: 'grow',
            animationDuration: '5s',
            transformOrigin: 'center',
        },
        '@keyframes grow':{
            '0%':{
                scale: '0'
            },
            '100%':{
                scale: '1'
            }
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
