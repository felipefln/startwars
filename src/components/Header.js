import React from 'react'

import {
    Navbar,
    Container,
    Badge
} from 'reactstrap'


const Header = () => {
    return (
        <Navbar dark expand="md" light="true" className="mb-4">
            <Container>
                <Badge color="secondary" href="/">
                    <h1>Star Wars</h1>
                </Badge>
            </Container>
        </Navbar>
    )
}

export default Header