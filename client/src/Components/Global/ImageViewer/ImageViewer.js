import React, { useState, Fragment } from 'react';
import { Box, makeStyles, createStyles } from '@material-ui/core';
import Backdrop from '../Backdrop/Backdrop'

const ImageViewer  = (props) => {
    const {src, styleClass} = props
    const classes = usestyles()

    const [open, setOpen] = useState(false)

    const closeHandler = ()=>{
        setOpen(false)
    }

    const openHandler = () =>{
         setOpen(true)
    }

    return(
        <Fragment>
            <Backdrop open={open} closeHandler={closeHandler}>
                <Box className={styleClass && styleClass} style={{zIndex: '500'}} onClick={()=>console.log('clicked')}>
                    {
                        src ? <img src={src} className={classes.imageStyleFull}/> : 'loading....'
                    }
                </Box>
            </Backdrop>
            <Box>
                {src ? <img src={src} className={classes.imageStyle} onClick={openHandler}/> : 'loading....'}
            </Box>
        </Fragment>
    );
}

const usestyles = makeStyles(theme =>
    createStyles({
        imageStyle:{
            height: '80vh',
            imageRendering: 'pixelated',
            minHeight: '400px',
            maxHeight: '700px',
            cursor: 'pointer'
        },
        imageStyleFull:{
            imageRendering: 'pixelated',
            padding: '2%',
            height: '100vh',
            width: 'auto'
        }
    })
)

export default ImageViewer ;