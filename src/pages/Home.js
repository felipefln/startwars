import React, { useEffect, useState } from 'react'

import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

import Header from '../components/Header'
import { getPeople } from '../services/api'
import Peoples from '../components/Peoples'
import ModalDetail from '../components/ModalDetail';

const Home = () => {
    const [peoples, setPeoples] = useState([])
    const [peoplesCount, setPeoplesCount] = useState(0)
    const [nextPage, setNextPage] = useState('')
    const [previousPage, setPreviousPage] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalInfo, setModalInfo] = useState({})

    useEffect(() => {
        getPeoples()
    }, [])

    function getPeoples(paginate) {
        return getPeople(paginate)
            .then(res => {
                console.log(res)
                const { results, count, next, previous } = res.data
                setPeoples(results)
                setPeoplesCount(count)
                setNextPage(next)
                setPreviousPage(previous)
            })
    }

    function openModal(title, people, Component) {
        setModalInfo({ title, people, Component })
        setIsModalOpen(true)
    }

    return (
        <Container fluid className="mb-4">
            <ModalDetail
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                title={modalInfo.title}
                people={modalInfo.people}
                Component={modalInfo.Component}
            />
            <Row>
                <Col className="px-0">
                    <Header />
                </Col>
            </Row>
            {peoples.length === 0 && (
                <Row>
                    <Col className="text-center">
                        <h4 className="text-white">Loading peoples...</h4>
                    </Col>
                </Row>
            )}
            {peoples.length > 0 && (
                <React.Fragment>
                    <Container>
                        <Row>
                            <Col className="mb-4">
                                <h1 className="text-white peoples">
                                    Peoples
                                    <small className="float-right mt-2">
                                        {peoplesCount} peoples found
                                    </small>
                                </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Peoples peoples={peoples} modal={openModal} />
                        </Row>
                        <Row>
                            <Col>
                                {nextPage &&
                                    <Button

                                        color="warning"
                                        className="float-right"
                                        onClick={() => getPeoples(nextPage)}
                                    >
                                        Next Page
                                    </Button>
                                }
                                {previousPage &&
                                    <Button
                                        outline
                                        color="warning"
                                        className="float-right mr-2"
                                        onClick={() => getPeoples(previousPage)}
                                    >
                                        Previous Page
                                    </Button>
                                }
                            </Col>
                        </Row>
                    </Container>
                </React.Fragment>
            )}
        </Container>
    )
}

export default Home