import React, {useState, useEffect} from 'react';
import qs from 'qs';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Table, ButtonToggle } from 'reactstrap';

import './GodList.css';

const  GodList = () => {

    const myArrayUser = [
        {   
            user_id: "5",
            title: "Kill Paul",
            status_id: 4,
            name: "refused"
        }
    ]
    
    const [ userDatas, setUserDatas ] = useState(myArrayUser)
    const { name, status_id, title } = userDatas[0];
    const [ buttonColors, setButtonColors] = useState({
        accepted : null,
        refused: null,
        finish: null
    })

    console.log(userDatas)

    useEffect(() => {
        
    }, [userDatas[0]])

    useEffect(()=>{
        switch(status_id) {
            case 1 :
                setButtonColors({
                    accepted : 'success',
                    refused: 'danger',
                    finish: 'secondary'
                })
                break
            case 2 :
                setButtonColors({
                    accepted : 'success',
                    refused: 'secondary',
                    finish: 'secondary'
                })
                break
            case 3 :
                setButtonColors({
                    accepted : 'secondary',
                    refused: 'danger',
                    finish: 'secondary'
                })
                break
            case 4 :    
                setButtonColors({
                    accepted : 'secondary',
                    refused: 'secondary',
                    finish: 'success'
                })
                break
        }
    },[status_id])
    
    const onSubmitMission = (e) => {
        e.preventDefault();
        console.log(e.target.name)
        const config = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: qs.stringify({status_id : e.target.name}),
        };
        const url =''
        fetch(url, config)
    }
    // pending chois = 1
    // accepted = 2
    // refused = 3

    // done: Cfait = 4

    const display = userDatas.map((userData, index) => 
        <div key={index}>
            <Table striped>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Accept</th>
                        <th>Decline</th>
                        <th>Finish</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >{userData.title}</td>
                        <td>{userData.status_id}</td>
                        <td><ButtonToggle color={buttonColors.accepted}
                        name='accepted' type="submit" onClick={(e) => onSubmitMission(e)}>V</ButtonToggle></td>
                        <td><ButtonToggle color={buttonColors.refused} 
                        name="refused" type="submit" onClick={(e) => onSubmitMission(e)}>X</ButtonToggle></td>
                        <td><ButtonToggle color={buttonColors.finish} 
                        name="done" type="submit" onClick={(e) => onSubmitMission(e)}>V</ButtonToggle></td>
                    </tr>
                </tbody>
            </Table>
        </div>)

    return (display)
}

export default GodList;
