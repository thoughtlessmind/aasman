import React , {useEffect, Fragment} from 'react';
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

    const apiKey = 'gvLAFHhWfMdinBAuKFDs7VbBYNho9c6bHsVzCgRc'

    const imageViewer = (e) =>{
        console.log('target', e.target.src);
        let mainDiv = document.createElement('div')
        mainDiv.classList.add('imageViewerClass')
        let imageEl = document.createElement('img')
        imageEl.setAttribute('src', e.target.src)
        let bodyEl = document.getElementById('root')
        mainDiv.appendChild(imageEl)
        bodyEl.appendChild(mainDiv)

        mainDiv.addEventListener('click', (e) => {
            // console.log(e)
            // console.log(e.target);
            // console.log(e.path.haso('img'));
            // console.log('outside clilcked');
            
            if(e.target !== imageEl){
                console.log('outside clicked');
                bodyEl.removeChild(mainDiv)
            }
            
        })
    }





    return(

        <Box className={classes.mainContainer}>
            {
                !apodData ?
                    <CircularProgress className={classes.loaderStyle} size={21}/>:
                    <Fragment>
                        <Box className={classes.textContainer}>
                            <Typography style={{fontSize: '1.6rem', textAlign: 'left'}}>
                                Astronomy Picture of the Day
                            </Typography>
                            <Typography style={{fontSize: '2rem', textAlign: 'left', paddingTop: '2rem'}}>
                                {apodData.title}
                            </Typography>
                            <Typography style={{paddingTop: '0.5rem'}}>
                                {apodData.explanation}
                            </Typography>
                        </Box>
                        <Box className={classes.apodMediaContainer}>
                            {
                                apodData.media_type === 'image' ?
                                    <img onClick={imageViewer} src= {apodData.url} className={classes.apoImage} alt={apodData.title}/>:
                                    <video height='400px' width='700px' src={`${apodData.url}&autoplay=1`}/>
                            }
                        </Box>
                    </Fragment>

            }

            {/* <Box className={classes.imageViewerClass}>
                <img src={apodData && apodData.url}/>
            </Box> */}
        </Box>
    );
}

const usestyles = makeStyles(theme =>
    createStyles({
        mainContainer:{
            display: 'flex',
            flexDirection: 'row',
            color: 'rgba(255,255,255,0.9)',
            animationName: 'grow',
            animationDuration: '5s',
            transformOrigin: 'center',
            padding: '2rem'
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
        textContainer: {
            textAlign: 'left'
        },
        apodMediaContainer:{
            // width: '50%'
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
            height: '80vh',
            imageRendering: 'pixelated',
            minHeight: '400px',
            maxHeight: '700px'
        },
        dark:{
            backgroundColor: '#000',
            color: '#fff'
        },

        imageViewerClass:{
            position: 'fixed',
            top: '20%',
            left: '20%',
            zIndex: '1000'
        },
        [theme.breakpoints.down('md')]:{
            mainContainer:{
                flexDirection: 'column',
                padding: '0'
            }
        }
    })
)

export default Apod ;

