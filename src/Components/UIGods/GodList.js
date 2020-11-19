import React from 'react';

import './GodList.css';

function GodList({ status_id, title }) {
    
    return (
        <table class="styled-table">
            <thead>
                    <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Accept / Decline</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active-row">
                    <td>{title}</td>
                    <td>{status_id}</td>
                    <td>Y/N</td>
                </tr>
                <tr>
                    <td>{title}</td>
                    <td>{status_id}</td>
                    <td>Y/N</td>
                </tr>
             </tbody>
        </table>
    )
}

export default GodList;
