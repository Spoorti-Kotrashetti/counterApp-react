import React, { Component } from 'react';

class  Counter extends Component {
    
    //----------------------------------------------------------------------------------------------------------------
    styler = {
        fontSize: 10,
        fontWeight: 'bold',
    }
    paraStyle = {
        margin:3,
        padding:5,
        display:'inline'
    }
    //----------------------------------------------------------------------------------------------------------------
    render() {
        return (
            <div > 
                {this.props.children}
                <span id='bage' className={this.getBadgeClasses()}>{this.formatValue()}</span>
                <p style={this.paraStyle}><button onClick={()=>this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>+</button></p>
                <p style={this.paraStyle}><button onClick={()=>this.props.onDecrement(this.props.counter)} className='btn btn-secondary btn-sm'>-</button></p>
                <p style={this.paraStyle}><button onClick={()=>this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm'>Delete</button></p>
            </div>
        );
    }
    //-------------------------------------------------------------------------------------------------------------
    getBadgeClasses (){
        let classes = 'badge m-2 badge-';
        classes+= this.props.counter.value===0 ? 'warning' : 'primary';
        return classes;
    }
    //----------------------------------------------------------------------------------------------------------------
    formatValue(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
export default Counter;
   
