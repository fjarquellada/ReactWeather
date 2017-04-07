var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return  {
            isLoading: false
        };
    },
    handleSearch: function(location){
        var _this = this;
        
        //debugger; 
        this.setState({isLoading: true});
        
        OpenWeatherMap.getTemp(location).then(function(temp){
            _this.setState({
                location: location,
                temp: temp -53,
                isLoading: false
            });
        }, function(errorMessage){
            this.setState({isLoading: false});
            alert(errorMessage);
        });

    },
    render: function(){
        var {isLoading, location, temp} = this.state;
        
        function renderMessage(){
            if(isLoading){
                return <h2>Fetching Weather ...</h2>;
            }else if(location && temp){
                return <WeatherMessage location={location} temp={temp} />;
            }
        }

        return(
            <div>
                <h1 className="text-center">Obtener el Tiempo</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;