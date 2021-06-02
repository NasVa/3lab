import React from 'react'
import './PoetsList.css'
import {Link, Switch, Route, NavLink, useRouteMatch} from "react-router-dom";
import PoetCard from "../PoetCard/PoetCard";

let Names = [
    'Bykov Vasily',
    'Yakub Kolas ',
    'Yanka Kupala ',
    'Maxim Bogdanovich',
    'Lydia Vakulovskaya']

const PoetItem = (props) =>{
    // let match = useRouteMatch()
    let tmpId = props.id
    return(
        <div className={'names'}>
            <NavLink to={"/PoetCard/" + props.id} className={'names'}>
                {props.name}
            </NavLink>
            <Route path={"/PoetCard/" + props.id} render={(props) => ( <PoetCard {...this.props} /> )} />
        </div>
    )
}

export default function PoetsList(props) {
    return (
        <div>
            <div className={'list'}>
                <PoetItem id='1' name={Names[0]}/>
                <PoetItem id='2' name={Names[1]}/>
                <PoetItem id='3' name={Names[2]}/>
                <PoetItem id='4' name={Names[3]}/>
                <PoetItem id='5' name={Names[4]}/>
            </div>
        </div>
    )
}