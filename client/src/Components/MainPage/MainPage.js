import React from 'react';
import { Box } from '@material-ui/core';
import Apod from '../Apod/Apod';
import AppTopBar from '../AppBar/AppTopBar'
import Iss from '../Iss/Iss';
import axios from 'axios';





class MainPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            issPosition: null,
            apodData: []
        }
    }

    getIssPosition = async () =>{
        await axios({
            method: 'GET',
            url: 'http://api.open-notify.org/iss-now.json'
        }).then(res=>{
            this.setState({issPosition: res.data})
        })
    }

    getApod = () =>{
        fetch("/apod")
            .then(res => res.json())
            .then(data=> {
                this.setState({apodData: data})
            })

    }

    componentDidMount() {
        this.getIssPosition()
        this.getApod()
    }



    render(){
        return(
            <Box>
                <AppTopBar/>
                <Apod apodData={this.state.apodData}/>
                <Iss issPosition={this.state.issPosition}/>
            </Box>
        )
    }
}



export default MainPage ;
 