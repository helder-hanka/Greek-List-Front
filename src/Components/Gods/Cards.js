import React from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';
const Cards = ({ god }) => {
    console.log(god.avatar);
        return (
            <div className="container">
                <Card className="style">
                    <CardImg variant="top" src={god.avatar} alt={god.name} />
                    <CardBody>
                        <CardTitle tag="h5">{god.name}</CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <Button variant="primary">Rent</Button>
                    </CardBody>
                </Card>
            </div>
        );
};

export default Cards;
