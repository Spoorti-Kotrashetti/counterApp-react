import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    render() { 
                return (
                    <div style = {{margin:10, padding:18,}}>
                        <h1 style={{margin:5,padding:2}}>SHOPPING CART</h1>
                        <p><button onClick={this.props.onReset} className = 'btn btn-info btn-sm m-2'>Reset</button></p>
                        {this.props.counters.map(counter=> (
                                <Counter
                                    key={counter.id} 
                                    onDelete={this.props.onDelete}
                                    onIncrement={this.props.onIncrement}
                                    onDecrement={this.props.onDecrement}
                                    
                                    // id={counter.id} 
                                    // value={counter.value}
                                    counter={counter}
                                />))}
                        
                        
                        
                        <h4 style={{background:'lightgrey', width:230,margin:5,padding:5}}>Total Selected
                        <span id='totSelect' className='badge m-2 badge-primary'>{this.props.navCount}</span>
                        </h4>
                        <h1><button onClick={this.props.onAddNew} className = 'btn btn-info btn-sm'>Add New Item</button></h1>
                    </div>
                );
    }
}
export default Counters;