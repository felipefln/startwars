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

import { filmDetails } from '../services/api'

const FilmCard = ({ filmUrl }) => {
    const [film, setFilm] = useState({})

    useEffect(() => {
        filmDetails(filmUrl)
            .then(res => setFilm(res.data))
    }, [filmUrl])

    return (
        <Card className="mb-3">
            <CardBody>
                <CardTitle className="mb-2 h5">
                    <strong>{film.title}</strong>
                </CardTitle>
                <CardSubtitle className="mb-3 text-secondary">
                    This is the episode {film.episode_id} of star wars series
                </CardSubtitle>
                <CardText>
                    {film.opening_crawl}
                </CardText>
                <ListGroup className="mt-2" flush>
                    <ListGroupItem className="pl-0" disabled>Director: {film.director}</ListGroupItem>
                    <ListGroupItem className="pl-0" disabled>Producer: {film.producer}</ListGroupItem>
                    <ListGroupItem className="pl-0" disabled>Release date: {film.release_date}</ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    )
}

export default FilmCard