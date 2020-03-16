import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import {Grid, Row, Col} from 'react-flexbox-grid';
import './App.css';
import './components/WeatherLocation/styles.css';
import LocationListContainer from './containers/LocationListContaier';
import ForcastExtendedContainer from './containers/ForcastExtendedContainer';

const cities=[
  'Mexico',
  'Buenos Aires',
  'Bogota',
  'Londres'
]

class App extends React.Component {
  render(){
    return (
       <Grid>
         <Row>
           <Col xs={12}>
             <AppBar position='relative'>
               <ToolBar>
               <Typography variant="h6" >
                    Weather App
              </Typography>
               </ToolBar>
             </AppBar>
           </Col>
         </Row>
         <Row>
           <Col xs={12} md={6}>
              <LocationListContainer 
              cities={cities}
              />
           </Col >
           <Col xs={12} md={6}>
             <Paper elevation={6}>
              <div className='detail'>
                  <ForcastExtendedContainer/>
              </div>
              </Paper>
           </Col>
          </Row>
        </Grid>
    );
  }
}

export default App;