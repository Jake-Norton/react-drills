import React, {Component} from 'react';

class Login extends Component {
    render () {
        return (
            <div>
                <input onChange={e => this.handleUsernameChange(e.target.value)} type='text'/>
                <input onChange={e => this.handlePasswordChange(e.target.value)}type='text'/>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
    
    constructor () {
        super ();

        this.state = {
            username: '',
            password: ''
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUsernameChange (input1) {
        this.setState ({username: input1});
    }

    handlePasswordChange (input2) {
        this.setState ({password: input2});
    }

    handleLogin () {
        alert (`Username: ${this.state.username}  Password: ${this.state.password}`)
    }
}

export default Login;