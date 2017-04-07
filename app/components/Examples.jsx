import React from 'react';
import {Link} from 'react-router';
//var {Link} = require('react-router');

var Examples = (props) =>{
    return(  
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example laction to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Sevilla">Sevilla</Link>
                </li>
                <li>
                    <Link to="/?location=Madrid">Madrid</Link>
                </li>
            </ol>
        </div>
        );
};

module.exports = Examples;