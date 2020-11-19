import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Table, ButtonToggle } from 'reactstrap';

import './GodList.css';

function GodList({ status_id, title, onSubmitMission }) {
    
    return (
        
        <form onSubmit={onSubmitMission}>
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
                    <td >{title}</td>
                    <td>{status_id}</td>
                    <td><ButtonToggle color="success" type="submit">V</ButtonToggle></td>
                    <td><ButtonToggle color="danger" type="submit">X</ButtonToggle></td>
                    <td><ButtonToggle color="success" type="submit">A</ButtonToggle></td>
                </tr>
                <tr>
                    <td >{title}</td>
                    <td>{status_id}</td>
                    <td>
                        
                        <ButtonToggle color="success" type="submit">V</ButtonToggle>
                       
                    </td>
                    <td><ButtonToggle color="danger" type="submit">X</ButtonToggle></td>
                    <td><ButtonToggle color="secondary" type="submit" disabled>?</ButtonToggle></td>
                </tr>
                <tr>
                    <td >{title}</td>
                    <td>{status_id}</td>
                    <td><ButtonToggle color="success" type="submit">V</ButtonToggle></td>
                    <td><ButtonToggle color="danger" type="submit">X</ButtonToggle></td>
                    <td><ButtonToggle color="secondary" type="submit" disabled>?</ButtonToggle></td>
                </tr>
             </tbody>
        </Table>
         </form>
    )
}

export default GodList;

        // <ButtonToggle color="primary">primary</ButtonToggle>{' '}
        // <ButtonToggle color="secondary">secondary</ButtonToggle>{' '}
        // <ButtonToggle color="success">success</ButtonToggle>{' '}
        // <ButtonToggle color="info">info</ButtonToggle>{' '}
        // <ButtonToggle color="warning">warning</ButtonToggle>{' '}
        // <ButtonToggle color="danger">danger</ButtonToggle>{' '}