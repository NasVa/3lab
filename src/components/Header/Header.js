import React from 'react'
import './header.css'
import {NavLink} from "react-router-dom";


export default function Header(){
    return(
        <div>
            <header>
                <div className="container">
                    <div className="header-top">
                        <div className="imageBG">
                            <div id="backIm">
                                <div className="top-menu">
                                    <NavLink to="/" className="link">Home</NavLink>
                                    <NavLink to="/PoetsList" className="link">Poets</NavLink>
                                    <div className={'buttons'}>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button className="btn btn-outline-warning" type="button">ru</button>
                                            <button className="btn btn-outline-warning" type="button">en</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
)
}