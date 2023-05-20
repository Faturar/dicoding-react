import React, { Component } from 'react'

class AddNote extends Component {
  constructor(props) {
    super(props);

    // state
    this.state = {
      title: '',
      body: '',
      limit: 50
    }

    // Binding
    this.onChangeTitleEventHandler = this.onChangeTitleEventHandler.bind(this);
    this.onChangeBodyEventHandler = this.onChangeBodyEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  // Handler
  onChangeTitleEventHandler(event) {
    this.setState(() => {
      if(event.target.value.length <= 50) {
        return {
          title: event.target.value,
          limit: 50 - event.target.value.length
        }
      }
    });
  }

  onChangeBodyEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }


  render() {
    return (
      <div className='add-note'>
        <h2>Add Notes</h2>
        <form action="" onSubmit={this.onSubmitEventHandler}>
          <div className='add-input-container'>
            <label htmlFor="">Title</label>
            <input type="text" onChange={this.onChangeTitleEventHandler} value={this.state.title} placeholder='Write a title...' />
            <p>{this.state.limit !== 0 ? `Remaining character: ${this.state.limit}` : 'Limit title character reached'}</p>
          </div>
          <div className='add-input-container'>
            <label htmlFor="">Content</label>
            <textarea onChange={this.onChangeBodyEventHandler} value={this.state.body} name="" id="" cols="30" rows="5" placeholder='Write a content...'></textarea>
          </div>
          <button type='submit' className='add-button'>Add</button>
        </form>
      </div>
    )
  }
}

export default AddNote;