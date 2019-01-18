import React from "react"

class Weather extends React.Component {
    render() {
        return(
            <div>
               {this.props.city && this.props.country && <p className ="Weather__key">Location: <span> {this.props.city}, {this.props.country}</span></p>}
               {this.props.temperature && <p className ="Weather__key"> Temperature: <span>{this.props.temperature}</span></p>}
               {this.props.temp_min && <p className ="Weather__key">Min Temperature: <span>{this.props.temp_min}</span></p>}
               {this.props.temp_max && <p className ="Weather__key">Max Temperature: <span>{this.props.temp_max}</span></p>}
               {this.props.humidity && <p className ="Weather__key">Humidity: <span>{this.props.humidity}</span></p>}
               {this.props.pressure && <p className ="Weather__key">Pressure: <span>{this.props.pressure}</span></p>}
               {this.props.description && <p className ="Weather__key">Condition: <span>{this.props.description}</span></p>}
               {this.props.error && <p><span>{this.props.error}</span></p>}

            </div>
        )
    }
}

export default Weather;