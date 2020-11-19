import React from 'react';

import Example from './DropDown';
import Cards from './Cards';

import './Gods.css';

class Gods extends React.Component {
    state = {
        gods: [
            {
                name: 'Aphrodite',
                avatar: 'https://i.pinimg.com/originals/f2/89/84/f28984a535b6738c11fd7547c90ae142.jpg'
            },
            {
                name: 'Apollon',
                avatar: 'https://i.pinimg.com/originals/f2/89/84/f28984a535b6738c11fd7547c90ae142.jpg'
            },
            {
                name: 'Athéna',
                avatar: 'https://i.pinimg.com/originals/f2/89/84/f28984a535b6738c11fd7547c90ae142.jpg'
            },
            {
                name: 'Hadès',
                avatar: 'https://i.pinimg.com/originals/f2/89/84/f28984a535b6738c11fd7547c90ae142.jpg'
            },
            {
                name: 'Poséidon',
                avatar: 'https://i.pinimg.com/originals/f2/89/84/f28984a535b6738c11fd7547c90ae142.jpg'
            },
            {
                name: 'Zeus',
                avatar: 'https://i.pinimg.com/originals/f2/89/84/f28984a535b6738c11fd7547c90ae142.jpg'
            },
            {
                name: 'Aphrodite',
                avatar: 'https://i.pinimg.com/originals/f2/89/84/f28984a535b6738c11fd7547c90ae142.jpg'
            },
            {
                name: 'Apollon',
                avatar: 'https://i.pinimg.com/originals/f2/89/84/f28984a535b6738c11fd7547c90ae142.jpg'
            },
            {
                name: 'Athéna',
                avatar: 'https://i.pinimg.com/originals/f2/89/84/f28984a535b6738c11fd7547c90ae142.jpg'
            },
            {
                name: 'Hadès',
                avatar: 'https://i.pinimg.com/originals/f2/89/84/f28984a535b6738c11fd7547c90ae142.jpg'
            },
            {
                name: 'Poséidon',
                avatar: 'https://i.pinimg.com/originals/f2/89/84/f28984a535b6738c11fd7547c90ae142.jpg'
            },
            {
                name: 'Zeus',
                avatar: 'https://i.pinimg.com/originals/f2/89/84/f28984a535b6738c11fd7547c90ae142.jpg'
            },
        ]
    };

    render() {
        return (
            <div >
                <Example />
                <div className="container">
                    {this.state.gods.map(god => (
                        <Cards god={god} key={god.id} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Gods;
