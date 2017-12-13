 import React, { Component } from 'react';
import '../App.css';


 class Todoform extends Component {
   render() {
    const { details, notes, totalcounter} = this.props
      //console.log("Number of Tasks to do:" , totalcounter.incomplete)
      console.log(totalcounter)
      console.log("TodoList:", notes)
      const note = notes
      .filter((note) => {
      return details.id === note.id })
      .map((msg,item) => 
      <div className="Container">  
        <div className="NoteTextContainer">  
        <label style={{ textDecorationLine: msg.status ? 'line-through' : 'none', 
                        color: msg.status ? 'maroon' : 'black' }}>
                       {msg.note}
        </label>
        </div>
        <div className="ButtonContainer">
        <button className="Completebtn"
                onClick={this.props.handleCompleted.bind(this, msg)}
                type="button">Completed 
        </button>
        <button className="Removebtn"
                 onClick={this.props.removeTodo.bind(this, item)}>Remove
        </button>
        </div>
       </div>
      )
     return (
        <div className="BodyFrame">
           <div className="FormContainer">
              <input className="Inputbox"
                     type="text"
                     placeholder="What do you need to do?"
                     autoFocus="autofocus"
                     onChange={this.props.handleChange}
                     value={this.props.note}
                    >
              </input>
              <button className="ButtonAdd"
                       onClick={this.props.handleSave}
                        disabled={!this.props.note}> + Add Note
              </button>
            </div>
            <div className="NoteContainer">
                <div className="StatusContainer">
                   <label className="Stat ">{totalcounter.incomplete} todo/s left</label>
                  <button className="status allStat"
                          onClick={this.props.handleFilter.bind(this, 'ALL')}>All
                  </button>
                  <button className="status activeStat"
                      onClick={this.props.handleFilter.bind(this, 'INCOMPLETE')}>Active
                  </button>
                  <button className="status completedStat"
                    onClick={this.props.handleFilter.bind(this, 'COMPLETE')}>Completed
                  </button>
               </div>
               <div className="TodoListContainer">
                  {note}
               </div>
               <div className="StatusContainer">
                 <label className="completed">
                   Completed Tasks : {totalcounter.completed}
                 </label>
               </div>
            </div>
        </div>
          );
        }
      } 


export default Todoform;
