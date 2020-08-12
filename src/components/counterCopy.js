import React, { Component } from 'react';

class CounterCopy extends Component {
    state = {
        value: this.props.value,
    }
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
    //-------------------------------------------------------------------------------------------------------------------
    render() { 

        console.log('props', this.props)

        return (
            <div>
                <span id='bage' className = {this.getBadgeClasses()} >{this.formatValue()}</span>
                <button onClick={this.incrementHandler} className='btn btn-secondary btn-sm'>+</button>
                <button onClick={()=>this.props.onDelete(this.props.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            </div>
        );
    }

    //--------------------------------------------------------------------------------------------------------------
    
    
    incrementHandler = () => {
        const add = this.state.value;
        console.log('Increment clicked');
        console.log(add+1)
        this.setState ({value: add+1})
    }
    //----------------------------------------------------------------------------------------------------------------------
    getBadgeClasses = ()=>{
        let classes = 'badge m-2 badge-';
        classes+= this.state.value===0 ? 'warning' : 'primary';
        return classes;
    }

    formatValue = () =>{
        let {value} = this.state;
        return value === 0 ? 'Zero':value;
    }
    //------------------------------------------------------------------------------------------------------------------
}
 
export default CounterCopy;