import React from 'react';
import qs from 'qs';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
    state = {
        name: "",
        password: ""
    }

    onChange = (e) => {
        this.setState({value: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const user = {
            name : this.state.name,
            password : this.state.password
        }

        const body = JSON.stringify(user)
        Axios.post('http://localhost:8000/security/login', body)
        .then(res=> console.log(res.data))
    }
    
    render() {
        return (<>
            <form onSubmit={this.onSubmit} >
                <input type="text" name="name" id="name" onChange={this.onChange} />
                <input type="text" name="password" id="password" onChange={this.onChange} />
                <button>Submit</button>
                </form>
        </>)
    }
}

export default Login;
