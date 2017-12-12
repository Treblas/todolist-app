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
      noteslist:[]
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
    let notes = this.state.notes.slice();
    notes.splice(i, 1);
    this.setState({
      notes     
    })
  }
  handleSave(){
       var obj ={
        note: this.state.note,
        todoid: this.state.todoid,
        status: false
              }
      this.setState({
       notes: this.state.notes.concat(obj),
       noteslist: this.state.notes.concat(obj),

       note: '',
       todoid: this.state.todoid + 1,
       status: false,
     })
  }
    handleCompleted(msg){
    var newList = this.state.notes.map(item => {
    const itemSelected = item.todoid  === msg.todoid
    if(itemSelected) item.status = !item.status
    return item
      })
    this.setState({ 
    })
  }
  handleFilter(filter){
    const { notes, noteslist } = this.state
    if(filter !== 'ALL'){
     const curstat = filter === 'COMPLETE'
     notes.filter((complete) => {
      var news = complete.status === false
      console.log("Filter Completed:", news)

     })

    }
  }
/*
   handlefilterCompleted(){
     const resultCompleted  = this.state.notes.filter(todo => todo.status === true)
     console.log("Filter Completed:", resultCompleted)
  }
   
   handlefilterActive(){
     const resultActive  = this.state.notes.filter(todo => todo.status === false)
     console.log("Filter Active:", resultActive)
   }
   handlefilterAll(){
    const resultAll  = this.state.notes
    console.log("Filter All:", resultAll)
   }
  */
  render() {
    var counterStat = this.state.notes.reduce(function(prev, next){
    if(next.status){
       prev.completed++
    }  
    else{
      prev.incomplete++
    }
    return prev
    },{completed : 0, incomplete : 0})
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
               handleCompleted={this.handleCompleted.bind(this)}
               removeTodo={this.removeTodo.bind(this, 'counter')}
               id={this.state.todoid}
               complete={this.state.complete}
               totalcounter={counterStat}
                handleFilter={this.handleFilter.bind(this, 'filter')}
              />
      </div>
    );
  }
}

export default App;


