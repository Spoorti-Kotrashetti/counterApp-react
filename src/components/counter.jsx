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
        // console.log('props',this.props)
        
        // let shopp = (
        //     <div > 

                        {/* {/* {this.state.tags.length===0 && 'WE Need to create new tag!'}
                        {this.renderTags()} */}
                
        //     </div>
        // );
        
        return (
            <div > 
                {this.props.children}
                <span id='bage' className={this.getBadgeClasses()}>{this.formatValue()}</span>
                <p style={this.paraStyle}><button onClick={()=>this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>+</button></p>
                <p style={this.paraStyle}><button onClick={()=>this.props.onDecrement(this.props.counter)} className='btn btn-secondary btn-sm'>-</button></p>
                <p style={this.paraStyle}><button onClick={()=>this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm'>Delete</button></p>
                
                
                {/* {shopp} */}
                
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
    //---------------------------------------------------------------------------------------------------------------
    export default Counter;
        
    
    //------------------------------------------------------------------------------------------------------------------
    // incrementHandler = () => {
    //     const add = this.state.value;
    //     console.log('Increment clicked');
    //     console.log(add+1)
    //     this.setState ({value: add+1})
    // }
    //------------------------------------------------------------------------------------------------------------
    // decrementHandler = ()=>{
    //     const sub = this.state.value;
    //     console.log('Decrement clicked');
    //     console.log(sub-1)
    //     if(sub !== 0){
    //         this.setState({value: sub-1})
    //     }
    // }
    //-------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
    // renderTags (){
    //     if (this.state.tags.length === 0){
    //         return <p>No tags are available!!</p>
    //     }
    //     return (
    //         <ul>
    //             {this.state.tags.map(tag => <li>{tag}</li>)}
    //         </ul>
    //     )
    // }
//----------------------------------------------------------------------------------------------------------------------