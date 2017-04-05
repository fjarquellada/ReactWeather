var React = require('react');

var WeatherMessage = ({location, temp}) => {

    return(
        <h3>{location} Temperatura: {temp}</h3>
    );
};
module.exports = WeatherMessage;