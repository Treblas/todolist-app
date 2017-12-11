import React, { Component } from 'react';
import Todoform from './Components/Todoform'
import './App.css';

class App extends Component {
  state ={
      details: {},
      notes: [],
      note: '',
      todoid: 1,
      status: '',
      counter: 0,
      completed:0,
  }
  handleChange(prop, e){
    this.setState({[prop]: e.target.value })
  }
  removeTodo(name, i){
    var currentStat = this.state.notes.reduce(function(prev, next){
    var stat = next.status ? 1 : 0
    prev += stat
    return prev
    },0)
    var counter = this.state.notes
    let notes = this.state.notes.slice();
    notes.splice(i, 1);
    this.setState({
      counter:this.state.notes.length - 1,  
      notes     
    })
  }
  handleSave(){
       var obj ={
        note: this.state.note,
        todoid: this.state.todoid,
        status: this.state.status,
        counter: this.state.counter + 1,   
      }
      this.setState({
       notes: this.state.notes.concat(obj),
       note: '',
       todoid: this.state.todoid + 1,
       status: false,
       counter:  this.state.counter + 1 ,      
     })
  }
    handleCompleted(msg){
    var newList = this.state.notes.map(item => {
    const itemSelected = item.todoid  === msg.todoid
    if(itemSelected) item.status = !item.status
    return item
    })
    var currentStat = this.state.notes.reduce(function(prev, next){
    var stat = next.status ? 1 : 0
    prev += stat
    return prev
    },0)
   // var counter = this.state.notes
    this.setState({
        currentStat:this.state.currentStat,
        counter:this.state.notes.length - currentStat
      })
     console.log("Completed Tasks:", currentStat)
     //console.log("Counter: ",  counter)
     // console.log("Counter:", this.state.counter)
    // console.log(msg)
  }
  render() {
      console.log('Todo List :', this.state.notes)
     // console.log('Counter :', this.state.counter)
      //console.log('Completed Tasks :', this.state.completed)
    return (
      <div className="MainFrame">
        <div className="HeaderFrame">
        </div>
        <Todoform 
               handleChange={this.handleChange.bind(this, 'note')}
               handleSave={this.handleSave.bind(this)}
               notes={this.state.notes}
               details={this.state.details}
               note={this.state.note}
               counter={this.state.counter}
               handleCompleted={this.handleCompleted.bind(this)}
               removeTodo={this.removeTodo.bind(this, 'counter')}
               id={this.state.todoid}
               complete={this.state.complete}
               />
      </div>
   
    );
  }
}

export default App;
