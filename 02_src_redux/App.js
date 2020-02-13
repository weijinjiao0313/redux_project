import React,{Component} from 'react'
import Count from './compontents/count'

export default class App extends Component{
  render(){
    return (
      <Count store={this.props.store}/>
    )
  }
}