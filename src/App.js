import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY ="76dd35c373a97f14b857a6a2a2b7cf89";

class App extends React.Component {
  state = {
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    temp_min:undefined,
    temp_max:undefined,
    pressure:undefined,
    description:undefined,
    error:undefined
  }
  getWeather = async (e)=>{
    e.preventDefault();//it will prevent the default behaviour of this button
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country) {
      console.log(data);
    this.setState(
      {
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        pressure:data.main.pressure,
        description: data.weather[0].description,
        error:""


      }
    );
    }
    else {
      this.setState(
        {
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          temp_min: undefined,
          temp_max: undefined,
          pressure: undefined,
          description: undefined ,
          error:"Please enter the values."
  
  
        }
      );
    }
  } 

  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                <Titles/>
                </div>
                  <div>
                  <Form getWeather = {this.getWeather}/>
        <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        temp_min={this.state.temp_min}
        temp_max={this.state.temp_max}
        pressure={this.state.pressure}
        description={this.state.description}
        error={this.state.error}
        />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
     
    );
  }
}

       
export default App; //make this component available for import  