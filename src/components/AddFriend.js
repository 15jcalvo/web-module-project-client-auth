import React from 'react'
import axios from 'axios'

class AddFriend extends React.Component {
    state = {
        friend: {
            name: '',
            email: '',
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
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends', {
            id: parseInt(Math.random()*100),
            name: this.state.friend.name,
            email: this.state.friend.email,
            age: parseInt(Math.random()*100),
        },{
            headers: {
                authorization: token
            }
        })
            .then(res=> {
                console.log(res)
                this.props.history.push('/friends')
            })
            .catch(err=>{
                console.log(err)
            })
    }
    render() {
        return(
        <div>
            <h1>Add Friend</h1>
            <div>
                <form onSubmit={this.submit}>
                    <label>Name</label>
                    <input 
                        type='text'
                        name='name'
                        value={this.state.friend.username}
                        onChange={this.handleChange}
                    />
                    <label>Email</label>
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