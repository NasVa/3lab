import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";
import i18n from "i18next";
import PoetCard from "../PoetCard/PoetCard";

let personArrayRu = [
    "Быков Василий",
    "Якуб Колас",
    "Янка Купала",
    "Максим Богданович",
    "Лидия Вакулевская"
];

let personArrayEn = [
    'Vasily Bykov',
    'Yakub Kolas ',
    'Yanka Kupala ',
    'Maxim Bogdanovich',
    'Lydia Vakulovskaya'
];

let personArr = [
    "bykov",
    "kolas",
    "kupala",
    "bogdanovich",
    "vakulevskaya"
];

let tmp =[
    [true], [true], [true], [true], [true]
]

export class Search extends Component {
    render() {
        return <div>
            <div className="list-group authors-list" id="box">
                {showAll()}
            </div>
        </div>
    }
}

const PoetItem = (props) =>{
    return(
        <div className={'names'}>
            <NavLink to={"/PoetCard/" + props.id} className={'names'}>
                {props.name}
            </NavLink>
            <Route path={"/PoetCard/" + props.id} render={(props) => ( <PoetCard {...this.props} /> )} />
        </div>
    )
}

function showPersons() {

    let inputString = ""
    if(document.getElementById("inputString") != null) {
        inputString = document.getElementById("inputString").value;
    }
    if (isEmpty(inputString)) {
        return showAll();
    }
    let isSelected = false;
    let box = document.getElementById('box');
    if(box.innerHTML == null){
        box.innerHTML = '';
    }
    let personArray = [];
    switch(i18n.language){
        case 'en':
            personArray = personArrayEn;
            break;
        case 'ru':
            personArray = personArrayRu;
            break;
    }
    box.innerHTML = '';
        for (let index = 0; index < personArray.length; index++) {
            if (personArray[index].includes(inputString)) {
                isSelected = true;
                if(box.innerHTML != null) {
                    box.innerHTML +=
                        <PoetItem id={index + 1} name={personArrayEn[index]}/>
                }
            }
        }
        if (!isSelected) {
            box.innerHTML = "<p>Ничего не найдено</p>";
        }


}

function showAll() {
    const inputString = document.getElementById("inputString");
    let box = document.getElementById('box');
    if (box != null && inputString !== null) {
        let personArray = [];
        switch(i18n.language){
            case 'en':
                personArray = personArrayEn;
                break;
            case 'ru':
                personArray = personArrayRu;
                break;
        }
        box.innerHTML = '';
        for (let index = 0; index < personArray.length; index++) {
            box.innerHTML +=
                // "<a class=\"authors-list-a list-group-item list-group-item-action\" aria-current=\"page\" href=\"" + link + "\" id=\"" + (index + 1) + "\">" + person + "</a>"
                <PoetItem id={index+1} name={personArrayEn[index]}/>
        }
        return "";
    } else {
        return <div>
            <PoetItem id='1' name={personArrayEn[0]}/>
            <PoetItem id='2' name={personArrayEn[1]}/>
            <PoetItem id='3' name={personArrayEn[2]}/>
            <PoetItem id='4' name={personArrayEn[3]}/>
            <PoetItem id='5' name={personArrayEn[4]}/>
            {/*<Link className="authors-list-a list-group-item list-group-item-action" name="test"  aria-current="page" href="#" id="1" to="/author1"><MyComponent text="obuhovich"/></Link>*/}
            {/*<Link className="authors-list-a list-group-item list-group-item-action" href="#" id="2" to="/author2"><MyComponent text="kupala"/></Link>*/}
            {/*<Link className="authors-list-a list-group-item list-group-item-action" href="#" id="3" to="/author3"><MyComponent text="kolas"/></Link>*/}
            {/*<Link className="authors-list-a list-group-item list-group-item-action" href="#" id="4" to="/author4"><MyComponent text="tank"/></Link>*/}
            {/*<Link className="authors-list-a list-group-item list-group-item-action" href="#" id="5" to="/author5"><MyComponent text="baradulin"/></Link>*/}
        </div>
    }

}

function isEmpty(str) {
    return str.trim() === '' || false;
}

export default showPersons;