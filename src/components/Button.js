import React from "react";
import "./Button.css";


const isOperator = val => {
    return !isNaN(val) || val === "." || val ==="=";
}
//above means if value is a number, ., or =, it will return true
// !isNaN is double negative meaning 'is a number' 


const Button = props => (
<div className={`button-container ${isOperator(props.children) ? null : "operator"}`}>
    {props.children}
</div>
)
//code inside ${} above means: if isOperator is true (i.e. it's a number, . or =), it'll do nothing, but(:)if it's 
//true it will add operator class

export default Button;