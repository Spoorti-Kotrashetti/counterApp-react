import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = { 
        counters: [
            {id:1, value: 0,},
            {id:2, value: 0,},
            {id:3, value: 0,},
            {id:4, value: 0,},
        ],

        navCount:0,
     };
     
    render() { 
                return (<div style = {{margin:10, padding:18,}}>
                    <h2 style={{background:'lightgrey',margin:5,padding:5}}>Navbar
                    <span id='navBage' className='badge m-2 badge-primary'>0</span>
                    </h2>
                    
                    <h1 style={{margin:5,padding:2}}>SHOPPING CART</h1>
                    <p><button onClick={this.handleReset} className = 'btn btn-info btn-sm m-2'>Reset</button></p>
                    {this.state.counters.map(counter=> (
                            <Counter
                                key={counter.id} 
                                onDelete={this.deleteHandler}
                                onIncrement={this.incrementHandler}
                                onDecrement={this.decrementHandler}
                                
                                // id={counter.id} 
                                // value={counter.value}
                                counter={counter}
                            />))}
                    <h4 style={{background:'lightgrey', width:230,margin:5,padding:5}}>Total Selected
                    <span id='totSelect' className='badge m-2 badge-primary'>{this.state.navCount}</span>
                    </h4>
                    <h1><button onClick={()=>this.addNewHandler(this.state.counters)} className = 'btn btn-info btn-sm'>Add New Item</button></h1>
                </div>);
    }

                
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
        if(newList.length === 0){
            let nav = this.state.navCount;
            this.setState({counters: newList});
            this.setState({navCount:0})
        }
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
    
    addNewHandler=(counter)=>{
        console.log("Add Event Handler called")
        let newList = [this.state.counters]
        let index = newList.indexOf(counter)
        // newList.forEach(element => {element.id = 
            
        // });
    }
    
    
    
    
    

    
}
 
export default Counters;