import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';

const render = document.querySelector("#root")
ReactDOM.render(
    <div>
        <h1>Calculadora</h1>
        <Calculator />
    </div>
, render);


