import React from 'react';

import './Gods.css';
import Example from './DropDown';

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
            }
        ]
    };

    render() {
        return (
            <div>
                <Example />
                {this.state.gods.map(god => (
                    <div className="container" key={god.id}>
                        <img className="img" src={god.avatar} alt={god.name} />
                        <h2>{god.name}</h2>
                    </div>
                ))}
            </div>
        );
    }
}

export default Gods;
