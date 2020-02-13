import React,{Component} from 'react'
import { createIncrementAction, createDecrementAction } from '../redux/count_action_creators'


export default class Count extends Component{

    increment=()=>{
        const value = this.refs.checkNumber.value
        this.props.store.dispatch(createIncrementAction(value*1))
    }
    decrement=()=>{
        const value = this.refs.checkNumber.value
        this.props.store.dispatch(createDecrementAction(value*1))
    }
    incrementOdd=()=>{
        const value = this.refs.checkNumber.value
        const number = this.props.store.getState()
        if(number%2 === 1){
            this.props.store.dispatch(createIncrementAction(value*1))
        }
    }
    incrementAsync=()=>{
        const value = this.refs.checkNumber.value
        setTimeout(()=>{
            this.props.store.dispatch(createIncrementAction(value*1))
        },1000)
    }

    render(){
        return(
            <div>
				<h2>当前计数为：{this.props.store.getState()}</h2>
				<select ref='checkNumber'>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick = {this.increment}>+</button>&nbsp;
				<button onClick = {this.decrement}>-</button>&nbsp;
				<button onClick = {this.incrementOdd}>increment if odd</button>&nbsp;
				<button onClick = {this.incrementAsync}>increment async</button>
			</div>
        )
    }
}