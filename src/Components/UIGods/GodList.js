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
            status_id: 1,
            name: "refused"
        }
    ]
    
    const [ userDatas, setUserDatas ] = useState(myArrayUser)
    const { name, status_id, title } = userDatas[0];
    console.log(userDatas)

    useEffect(() => {
        
    }, [userDatas[0]])

    
    
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

    const test = (e) => {
        if (e === 1 && e !== 2 && e !== 3) {
            return true
        } else if (e === 2) {
            return true
        }
    }

    // const displayAccepted = (status_id === 2 || !status_id === 4 ||  status_id === 1) && (status_id === 3) ? `${"success"}` : `${"secondary"}`; 4
    const displayAccepted = test(status_id) ? `${"success"}` : `${"secondary"}`;
    console.log('Accepted', displayAccepted)
    // const displayFinish  = displayStatus(status_id) === "done" ? `${"success"}` : `${"secondary"}`;

    const displayRefused = test(status_id) ?`${"secondary"}` : `${"danger"}` ;

    // const displayRefused = status_id === 3 ? `${"danger"}` :`${"secondary"}` ;
    console.log('Refused', displayRefused)

    // const displayPending = displayStatus(status_id) === "pending" ? `${"success"}` : `${"secondary"}`;
    // const displayFinish  = status_id === 4 ?`${"success"}` : `${"secondary"}`;
    // console.log('Finish', displayFinish)
    // const displayLetter = finish ? 'A' : '?';

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
                        <td><ButtonToggle color={displayAccepted}
                        name='accepted' type="submit" onClick={(e) => onSubmitMission(e)}>V</ButtonToggle></td>
                        <td><ButtonToggle color={displayRefused} 
                        name="refused" type="submit" onClick={(e) => onSubmitMission(e)}>X</ButtonToggle></td>
                        <td><ButtonToggle //color={displayFinish} 
                        name="done" type="submit" onClick={(e) => onSubmitMission(e)}>V</ButtonToggle></td>
                    </tr>
                </tbody>
            </Table>
        </div>)

    return (display)
}

export default GodList;
