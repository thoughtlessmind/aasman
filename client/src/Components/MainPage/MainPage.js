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
            apodData: [],
            issInfo: [],
            roadsterInfo:[]
        }
    }



    getApod = () =>{
        fetch("/apod")
            .then(res => res.json())
            .then(data=> {
                this.setState({apodData: data})
            })

    }

    getIssInfo = () => {
        fetch("/issInfo")
            .then(res => res.json())
            .then(data=> {
                this.setState({issInfo: data})
            })

    }

    getIssLocation = () => {
        fetch("/issLocation")
            .then(res => res.json())
            .then(data=> {
                this.setState({issPosition: data})
            })
    }

    getRoadsterInfo = () => {
        fetch("/roadsterInfo")
            .then(res => res.json())
            .then(data=> {
                console.log(data);
                this.setState({roadsterInfo: data})
            })
    }

    componentDidMount() {
        this.getApod()
        this.getIssInfo()
        // this.getIssLocation()
        // this.getRoadsterInfo()
    }



    render(){
        return(
            <Box>
                <AppTopBar/>
                <Apod apodData={this.state.apodData}/>
                <Iss issPosition={this.state.issPosition} issInfo={this.state.issInfo}/>
            </Box>
        )
    }
}



export default MainPage ;
 