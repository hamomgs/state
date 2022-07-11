import React, { Component } from 'react';
import './App.css';
import fruitImg from './assets/image/pera.jpg';

export default class App extends Component {
  state = {
    firstName: 'Hamom',
    age: 19,
    favFood: 'Pão de Queijo',
    musics: ['Let Her Go', 'Numb Little Bug', 'Alone']
  };

  render() {
    return (
      <div>
        <h1>Nome: {this.state.firstName}</h1>
        <h2>Idade: {this.state.age}</h2>
        <h3>Comida favorita: {this.state.favFood}</h3>
        <h3>3 Músicas:</h3>
        <ul>
          <li>{this.state.musics[0]}</li>
          <li>{this.state.musics[1]}</li>
          <li>{this.state.musics[2]}</li>
        </ul>
        <h3>Fruta favorita:</h3>
        <img src={fruitImg} alt="Pera" />
      </div>
    );
  }
}