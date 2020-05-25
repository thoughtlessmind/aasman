import React, { Fragment } from 'react';
import { Box, makeStyles, createStyles, Typography, CircularProgress } from '@material-ui/core';

const Iss  = (props) => {

    const classes = usestyles()
    const {issPosition} = props


    return(
        <Box className={classes.mainContainer}>
                
            <Box className={classes.subContainer}>
                <Typography variant='h4' align='center'>International Space Station</Typography>
                <Box style={{marginTop: '1.5rem', paddingLeft: '25px'}}>
                    {
                        issPosition ?
                            <Fragment>
                                <Typography align='left'>{`Currently going over city`}</Typography>
                                <Box className={classes.issPositionContainer}>
                                    <Typography>Position: {issPosition.iss_position.latitude}, {issPosition.iss_position.longitude} (Lat, Long)</Typography>
                                </Box>
                            </Fragment>:
                            <CircularProgress size={19} style={{position: 'absolute', top: '48%', left:'50%'}}/>
                    }
                    
                    {/* <Typography>Position</Typography> */}
                    
                </Box>

            </Box>
                    

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
            color: '#fff',
            justifyContent: 'space-between',
            padding: '2rem',
        },
        subContainer:{
            width: '30%',
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '1px 1px 3px 1px #848484a6',
            animationName: `$gty`,
            transformOrigin: 'top',
            // transition: '0.2s',
            animationDuration: '0.5s'
            
        },
        '@keyframes gty':{
            '0%':{
                transform: 'scaleY(0)'
            },
            '100%':{
                transform: 'scaleY(1)'
            }
        },
        issPositionContainer:{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '7px 0'
        }
    })
)

export default Iss ;