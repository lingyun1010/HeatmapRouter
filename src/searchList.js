import React from 'react'

class SearchList extends React.Component{
	constructor(props){
    super(props)
    this.state = {
      value: ''     
    }
 	}

	render(){
		return(
			<li>{this.props.value}</li>
		)
	}

}

export default SearchList