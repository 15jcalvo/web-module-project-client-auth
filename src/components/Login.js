import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
          username: '',
          password: ''
        }
      };
    
    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };
    login = e => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', this.state.credentials)
            .then(res=> {
                console.log(res)
            })
            .catch(err=> {
                console.log(err)
            })
    }
    render() {
        return(
        <div>
            <h1>Login</h1>
            <div>
                <form onSubmit={this.login}>
                    <input 
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
        )
    }
}

export default Login;