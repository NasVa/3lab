import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Button, Form, FormControl} from "react-bootstrap";
import showPersons from "./search";

import MyComponent from "../PoetCard/translatop";


export class SearchHeader extends Component{
    render(){
        return(
        <div>
            <searchHeader />
            <nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <Form inline className="d-flex search-form">
                            <FormControl id="inputString" type="text" placeholder="..." className="mr-sm-2" />
                            <Button variant="outline-success" onClick={showPersons}><MyComponent text="search"/></Button>
                        </Form>
                    </div>
                </div>
            </nav>
        </div>)
    }
}
