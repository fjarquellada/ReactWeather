var React           = require('react');
var WeatherForm     = require('WeatherForm');
var WeatherMessage  = require('WeatherMessage');
var OpenWeatherMap  = require('OpenWeatherMap');
var ErrorModal      = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function(){
        return  {
            isLoading: false
        };
    },
    handleSearch: function(location){
        var _this = this;
        
        //debugger; 
        this.setState({isLoading: true,
            errorMessage: undefined});
        
        OpenWeatherMap.getTemp(location).then(function(temp){
            _this.setState({
                location: location,
                temp: parseInt(temp -53),
                isLoading: false,
                errorMessage: undefined
            });
        }, function(errorMessage){
            console.log("error mesg: ", errorMessage);
            _this.setState({
                isLoading: false,
                errorMessage: "Tiempo no encontrado para: "+location
            });
        });

    },
    render: function(){
        var {isLoading, location, temp, errorMessage} = this.state;
        
        function renderMessage(){
            if(isLoading){
                return <h2>Fetching Weather ...</h2>;
            }else if(location && temp){
                return <WeatherMessage location={location} temp={temp} />;
            }
        };
        function renderErrorMessage(){
            if(typeof errorMessage === 'string'){
                return( 
                    <ErrorModal message={errorMessage}/>
                );
            }
        }
        return(
            <div>
                <h1 className="text-center">Obtener el Tiempo</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderErrorMessage()}
            </div>
        );
    }
});

module.exports = Weather;