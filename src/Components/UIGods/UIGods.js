import React, {useState} from 'react';
import GodList from './GodList';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Button, FormGroup, Label, Col } from 'reactstrap';

import './UIGods.css';


const UIGods = () => {

    const myArrayGod =
        {
            id:'0',
            name: 'Fredy'
        }

        // get Axios
    const myArrayUser = [
        {   
            user_id: "5",
            title: "Kill Paul",
            status_id: "2",
            finish: true

        }
    ]

    const [ god, setGod ] = useState(myArrayGod);
    const { id, name } = god;
    console.log(god)

    const [ userDatas, setUserDatas ] = useState(myArrayUser)
    const { title, status_id, finish } = userDatas;
    console.log(userDatas)
    

    const handleChange = (e) => {
        console.log(e.target.value);
        setGod({...god, [e.target.name]: e.target.value})
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(id, name)
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(god),
        };

        // const url = "https://post-a-form.herokuapp.com/api/employees/";
        // fetch(url, config)
        // .then(res => res.json())
        // .then(res => {
        //     if (res.error) {
        //     alert(res.error);
        //     } else {
        //     alert(`Employee #${name} has been successfully added!`);
        //     }
        // }).catch(e => {
        //     console.error(e);
        //     alert('There was an error when adding the employee.');
        // });
        
    }

    const displayUserData = userDatas.map(userData => <GodList {...userData}/>)

    const onSubmitMission = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <p>Name: {name}</p>
            <Form onSubmit={onSubmitForm}>
                <FormGroup>
                <Label check >
                <Col sm={10}>
                    <input for="examplePassword" className="mr-sm-2" type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={handleChange}
                    />
                </Col>
                </Label>
                <Button type="submit">Modify</Button>
                </FormGroup>                

            </Form>
            {displayUserData}
        </div>
    )
}

export default UIGods;