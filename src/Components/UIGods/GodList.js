import React, {useState} from 'react';
import qs from 'qs';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Table, ButtonToggle } from 'reactstrap';

import './GodList.css';

const  GodList = () => {

    const myArrayUser = [
        {   
            user_id: "5",
            title: "Kill Paul",
            status_id: "2",
            name: "refused"
        }
    ]
    
    const [ userDatas, setUserDatas ] = useState(myArrayUser)
    const { name, status_id, title } = userDatas;
    console.log(userDatas)

    // const displayUserData = userDatas.map(userData => <GodList finish={finish} {...userData}/>)

    
    
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
    
    const displayStatus = (decision) => {
        if (decision === 2) {
            return 'accepted'
        } else if (decision === 3) {
            return 'refused'
        } else if (decision === 4){
            return 'done'
        }
    }


    const displayAccepted = displayStatus(status_id) === "accepted" ? `${"success"}` :`${"secondary"}`  ;
    console.log('Accepted', displayAccepted)
    // const displayFinish  = displayStatus(status_id) === "done" ? `${"success"}` : `${"secondary"}`;
    const displayRefused = displayStatus(status_id) === "refused" ? `${"secondary"}` : `${"danger"}`;
    console.log('Refused', displayRefused)
    // const displayPending = displayStatus(status_id) === "pending" ? `${"success"}` : `${"secondary"}`;
    // const displayFinish  = (displayStatus(status_id) !== "done" && displayStatus(status_id) !==  "pending") ? `${"secondary"}` : `${"success"}`;
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

        // <ButtonToggle color="primary">primary</ButtonToggle>{' '}
        // <ButtonToggle color="secondary">secondary</ButtonToggle>{' '}
        // <ButtonToggle color="success">success</ButtonToggle>{' '}
        // <ButtonToggle color="info">info</ButtonToggle>{' '}
        // <ButtonToggle color="warning">warning</ButtonToggle>{' '}
        // <ButtonToggle color="danger">danger</ButtonToggle>{' '}



/*
{ if (displayFinishPending(status_id) === "accepted") {
return  <td><ButtonToggle  color="success" name='accepted' type="submit" onClick={(e) => onSubmitMission(e)}>V</ButtonToggle></td>
        <td><ButtonToggle color="secondary" name="refused" type="submit" onClick={(e) => onSubmitMission(e)}>X</ButtonToggle></td>
        <td><ButtonToggle color="secondary" name="done" type="submit" onClick={(e) => onSubmitMission(e)}>V</ButtonToggle></td>
} else if (displayFinishPending(status_id) === "refused") {
return  <td><ButtonToggle  color="secondary" name='accepted' type="submit" onClick={(e) => onSubmitMission(e)}>V</ButtonToggle></td>
        <td><ButtonToggle color="danger" name="refused" type="submit" onClick={(e) => onSubmitMission(e)}>X</ButtonToggle></td>
        <td><ButtonToggle color="secondary" name="done" type="submit" onClick={(e) => onSubmitMission(e)}>V</ButtonToggle></td>
} else if (displayFinishPending(status_id) === "done") {
return  <td><ButtonToggle  color="secondary" name='accepted' type="submit" onClick={(e) => onSubmitMission(e)}>V</ButtonToggle></td>
        <td><ButtonToggle color="secondary" name="refused" type="submit" onClick={(e) => onSubmitMission(e)}>X</ButtonToggle></td>
        <td><ButtonToggle color="success" name="done" type="submit" onClick={(e) => onSubmitMission(e)}>V</ButtonToggle></td>
} else {
return  <td><ButtonToggle  color="success" name='accepted' type="submit" onClick={(e) => onSubmitMission(e)}>V</ButtonToggle></td>
        <td><ButtonToggle color="danger" name="refused" type="submit" onClick={(e) => onSubmitMission(e)}>X</ButtonToggle></td>
        <td><ButtonToggle color="secondary" name="done" type="submit" onClick={(e) => onSubmitMission(e)}>V</ButtonToggle></td>
}    


    <td><ButtonToggle  color="success" name='accepted' type="submit" onClick={(e) => onSubmitMission(e)}>V</ButtonToggle></td>
    <td><ButtonToggle color="danger" name="refused" type="submit" onClick={(e) => onSubmitMission(e)}>X</ButtonToggle></td>
    <td><ButtonToggle color={displayFinish} name="done" type="submit" onClick={(e) => onSubmitMission(e)}>{displayLetter}</ButtonToggle></td> */