import React from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage'
import theme from './Components/Global/theme'
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';

function App() {
  
	return (
		<MuiThemeProvider theme={theme}>
			<div className="App">
				<MainPage/>
			</div>
		</MuiThemeProvider>
	);
}

export default App;
