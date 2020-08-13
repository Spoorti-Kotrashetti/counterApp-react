import React from 'react';
import logo from './logo.svg';
import { Component } from 'react';
import NavBar from './components/navbar'
import Counters from './components/counters';

class App extends Component {

    state = { 
      counters: [
          {id:1, value: 0,},
          {id:2, value: 0,},
          {id:3, value: 0,},
          {id:4, value: 0,},
      ],
      counter2: [
        {id:1, value:0}
      ],

      navCount:0,
  };

  incrementHandler = (counter) => {
    const add = [...this.state.counters];
    console.log('Increment clicked',counter);
    const index = add.indexOf(counter)
    add[index]={...counter}
    add[index].value++
    let nav = this.state.navCount+1;
    this.setState ({counters: add});
    this.setState({navCount:nav})
    console.log(nav)
  }

  decrementHandler = (counter)=>{
    const sub = [...this.state.counters];
    console.log('Decrement clicked');
    const index = sub.indexOf(counter)
    sub[index]={...counter}
    if(sub[index].value !== 0){
        sub[index].value--
        if(this.state.navCount !== 0){
            let nav = this.state.navCount-1;
            this.setState({navCount:nav})
            console.log(nav)
        }
    }
    this.setState({counters: sub})
  }

  deleteHandler=(counterId)=>{
    console.log('Delete Event called',counterId);
    let nonDeleteList = [...this.state.counters];
    const newList = nonDeleteList.filter(item=>item.id !== counterId)
    this.setState({counters: newList})
    console.log(newList)
    //--------------------
    let sum = 0;
    newList.forEach((a)=>sum += a.value)
    this.setState({navCount:sum})
    
  }

  handleReset=()=>{
    console.log("Reset Event Handler called")
    let newList = this.state.counters.map(item=>{
        item.value=0;
        return item;
    });
    let nav = this.state.navCount;
    this.setState({counters: newList});
    this.setState({navCount:0})
  }

  addNewHandler=()=>{
    console.log("Add Event Handler called")
    const newList = [...this.state.counters]
    newList.push({ id: Math.random(), value: 0 })
    this.setState({counters: newList})
    
  }

  

  render(){
    return (
      <React.Fragment>
        <NavBar
          totalCounters = {this.state.counters.filter(i=>i.value>0).length}
        />
        <main className="container">
          <Counters
            counter2={this.state.counter2}
            counters={this.state.counters} 
            navCount={this.state.navCount}
            onReset={this.handleReset}
            onAddNew={this.addNewHandler}
            onIncrement={this.incrementHandler}
            onDecrement={this.decrementHandler}
            onDelete={this.deleteHandler}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
