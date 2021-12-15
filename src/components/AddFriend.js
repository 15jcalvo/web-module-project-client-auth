import React from 'react'
import axios from 'axios'

class AddFriend extends React.Component {
    state = {
        friend: {
          name: '',
          email: ''
        }
      };
    
    handleChange = e => {
        this.setState({
          friend: {
            ...this.state.friend,
            [e.target.name]: e.target.value
          }
        });
      };
    submit = e => {
        e.preventDefault();
        console.log('submit')
    }
    render() {
        return(
        <div>
            <h1>Add Friend</h1>
            <div>
                <form onSubmit={this.submit}>
                    <input 
                        type='text'
                        name='name'
                        value={this.state.friend.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='email'
                        name='email'
                        value={this.state.friend.password}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
        )
    }
}

export default AddFriend;