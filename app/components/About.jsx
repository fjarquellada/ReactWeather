import React from 'react';

/*var About = React.createClass({
    render: function(){
        return(
            <h3>About Component</h3>
        );
    }
});*/

var About = (props)=>{
     return(
             <div>
                <h1 className="text-center page-title">About</h1>
                <p>Esta es una aplicación creada con React para consultar el tiempo.</p>
                <p>Aquí algunas de las herramientas usadas:</p>
                <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - Este fue el framework de javaScript usado.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - De esta web se ha usado el api gratuito para obtener el tiempo. 
                </li>
                </ul>
            </div>
        );
};

module.exports = About;