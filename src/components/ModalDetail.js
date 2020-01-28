import React from 'react'

import {
    Modal,
    ModalBody,
    ModalFooter,
    Button,
    Card,
    CardHeader,
    CardBody
} from 'reactstrap'

const ModalDetail = ({ isModalOpen, setIsModalOpen, title, people, Component }) => {
    return (
        <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} size="xl">
            <ModalBody className="p-0">
                <Card className="border-0">
                    <CardHeader className="border-0 bg-white">
                        <h4 className="mb-0">{title}</h4>
                    </CardHeader>
                    <CardBody className="">
                        {Component &&
                            <Component people={people} />
                        }
                    </CardBody>
                </Card>
            </ModalBody>
            <ModalFooter className="shadow">
                <Button
                    color="secondary"
                    onClick={() => setIsModalOpen(!isModalOpen)}
                >
                    Close
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalDetail