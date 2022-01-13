import './App.css'; // App 이라는 컴포넌트가 App.css의 디자인 사용
import { Component } from 'react';
import React from 'react';
import Header from "./components/Header.js";
import DoneList from './components/DoneList.js';

class App extends Component {
  state = {
      tasks:[
        {id:1, content:"components 분리"},
        {id:2, content:"state로 정보 은닉"},
        {id:3, content:"컴포넌트 내에 js 반복문 사용하여 리스트 구현"},
        {id:4, content:"class 대신 function 으로 코드 리팩토링"},
      ],
      header:{title:"FE Practice", desc:"리액트 연습해보기"}
    };
  render(){
    const {tasks, header} = this.state;
    return (
      <div className="App">
        <Header title={header.title} desc={header.desc}/>
        Hello React! <br/><br/>
        <DoneList data={tasks}/>
        <br/><br/><br/>
        <h3>yoon seo</h3>
      </div>
    );
  }
}

export default App;
