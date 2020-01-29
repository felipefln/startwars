import React, { useState, useEffect } from 'react'

import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    ListGroup,
    ListGroupItem
} from 'reactstrap'

import { startShipDetails } from '../services/api'

const StarshipCard = ({ starshipUrl }) => {
    const [starship, setStarship] = useState({})

    useEffect(() => {
        startShipDetails(starshipUrl)
            .then(res => setStarship(res.data))
    }, [starshipUrl])

    return (
        <Card className="mb-3">
            <CardBody>
                <CardTitle className="mb-2 h5">
                    <strong>{starship.name}</strong>
                </CardTitle>
                <CardSubtitle className="mb-3 text-secondary">
                    A {starship.model} model starship, manufactured by {starship.manufacturer}
                </CardSubtitle>
                <CardText>
                    Classified as {starship.starship_class}, this starship {' '}
                    {starship.films !== undefined ? `appears in ${starship.films.length} star wars films and ` : ''}
                    fits {starship.crew} crew members, {starship.passengers} passengers and cargo{' '}
                    capacity of {starship.cargo_capacity}kg, measures {starship.length}m with {' '}
                    hyperdrive rating of {starship.hyperdrive_rating}. Other features:
                </CardText>
                <ListGroup className="mt-2" flush>
                    <ListGroupItem className="pl-0" disabled>MGLT: {starship.MGLT}</ListGroupItem>
                    <ListGroupItem className="pl-0" disabled>Consumables: {starship.consumables}</ListGroupItem>
                    <ListGroupItem className="pl-0" disabled>Cost (in credits): {starship.cost_in_credits}</ListGroupItem>
                    <ListGroupItem className="pl-0" disabled>Max atmosphering speed: {starship.max_atmosphering_speed}</ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    )
}

export default StarshipCard