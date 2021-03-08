
import React, { Component } from 'react';

class Searchbar extends Component {
    state = {
        value: ''
    }
   
    onSubmitForm = event => {
        event.preventDefault();
        this.props.onSubmitForm(this.state.value)
        

     }
     inputChange = event => {
        const {currentTarget} = event;
        this.setState({value: currentTarget.value})
    }
        render (){
           
            return (
                <header className="Searchbar">
          <form  className="SearchForm" onSubmit={this.onSubmitForm}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
    
        <input
          onChange={this.inputChange}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
            )
        }
    }

export default Searchbar