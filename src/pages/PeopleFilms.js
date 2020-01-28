import React from 'react'

import { Row, Col } from 'reactstrap'

import FilmCard from '../components/FilmCard'

const PeopleFilms = ({ people }) => {
    return (
        <Row>
            {people.films.map(film => (
                <Col key={film} sm="6">
                    <FilmCard filmUrl={film} />
                </Col>
            )
            )}
        </Row>
    )
}

export default PeopleFilms