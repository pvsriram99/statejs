import React from 'react'
class Examplestate extends React.Component{
	constructor(){
		super();
		this.state={
			name:'sriram Panchaparvala'
		}
	}
	changeData=()=>{
		this.setState({
			name:'Panchaparvala Sriram'
		})
	}
	render(){
		return(
			<div>
				<h1>Hi, {this.state.name}</h1>
				<button onClick={this.changeData}>Click Me</button>
			</div>
		)
	}
}
export default Examplestate