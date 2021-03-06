import React from 'react'

class Filters extends React.Component {
  state = {
    type: ''
  }


  changeState = (e) => {
    this.setState({
      type: e.target.value
    })
  }

  // handleTypeSelection = () => {
  //   // let form = document.querySelector('#type')

  //   // this.props.fetchPets(form.value)
  // }

  handleClick = () => {
    this.props.onChangeType(this.state.type)
  }


  // click find pets 
  // get value of option select and pass that into fetchPets()

  render() {
    console.log("state type" , this.state.type)
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field" >
          <select name="type" id="type" onChange={this.changeState} >
{/* change state of type  */}
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleClick} className="ui secondary button">Find pets</button>
          {/* on click we pass the new state into our onChangeType function that sets the state of type for our parent 
          after that on the parent page we can invoke fetchPets and the dynamic state.type will determine the endpoint for the fetch
          */}
        </div>
      </div>
    )
  }
}

export default Filters
