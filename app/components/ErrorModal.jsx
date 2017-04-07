var React = require('react');

var ErrorModal = React.createClass({
    getDefaultProps: function(){
      return {
        title: 'Error'  
      };  
    },
    propTypes:{
      title: React.PropTypes.string,
      message: React.PropTypes.string.isRequired  
    },
    componentDidMount: function(){
      //debugger;
        var modal = new Foundation.Reveal($('#error-modal')); 
      modal.open();
    },
    render: function(){
        var {title, message} = this.props;
        return (
                <div id="error-modal" className="reveal tiny text-center">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                <button className="button hollow" data-close="">Aceptar</button>
                </p>
                </div>
        );
    }
});

module.exports = ErrorModal;