import React from 'react';
import PopUp from './PopUpregister';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Cards.css';

const Cards = ({ god }) => {
    console.log(god.avatar);
        return (
            <div>
                <Card className="style">
                    <CardImg variant="top" src={god.avatar} alt={god.name} />
                    <CardBody>
                        <CardTitle tag="h5">{god.name}</CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <PopUp />
                    </CardBody>
                </Card>
            </div>
        );
};

export default Cards;
