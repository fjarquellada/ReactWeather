var React = require('react');

var WeatherMessage = ({location, temp}) => {

    return(
        <h3 className="text-center">{location} Temperatura: {temp}&deg;C</h3>
    );
};
module.exports = WeatherMessage;