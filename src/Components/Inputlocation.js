import React, { Component } from 'react';
import Weathersummary from './Weathersummary';
class Inputlocation extends Component {

    state={
        cityname:null,
        buttonclicked: false 
     };
 
     
     handleChange=(e)=>{
         this.setState({ cityname: e.target.value });
     }
 
 
     validatecitynameBox=()=>{
         if(this.state.cityname!=null)
             {
                 this.setState({buttonclicked:true});
                 document.getElementById('Location').value='';
                 {this.props.fetchWeatherData}
             }
             else
              {
                 alert("Please enter valid location");
             }
     }
    render() {
        return (
            <div>
                 <br/><br/>
       <div>
            &ensp;&ensp;<input type="text" id="Location" onChange={ this.handleChange } />&ensp;&ensp;&ensp;
            <input type="button" value="WeatherInfo" onClick={this.validatecitynameBox}/>
       </div>
            { this.state.buttonclicked ? <Weathersummary location={this.state.cityname} /> : null }  
        </div>
        );
    }
}

export default Inputlocation;