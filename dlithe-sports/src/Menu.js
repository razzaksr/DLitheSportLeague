import { Container } from "@mui/material";
import React from "react";
import {Navbar, Nav} from "react-bootstrap"

export const Menu=()=>{
    return(
        <>
            <Navbar bg="danger" expand="md">
            <div className="container">
                <Navbar.Brand href="#">
                    <h1 className="text-info">Dlithe Sports League</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="dlithe"/>
                <Navbar.Collapse id="dlithe" >
                    <Nav className="ms-auto">
                        <Nav.Link className="btn btn-outline-info text-light me-2" href="/">Home</Nav.Link>
                        <Nav.Link className="btn btn-outline-info text-light me-2" href="/new">Schedule</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
            </Navbar>
        </>
    );
}