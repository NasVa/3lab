import backIm2 from "../../img/2back.png";
import React from "react";


export default function Header() {
    return (
        <div style={{backgroundImage: `url(${backIm2})`}} id={'backIm2'}>
            <div className={'welcomeAll'}>
                <div id={'welcome'}>Welcome!</div>
                <h2>This is site about Belarusian poets</h2>
            </div>
        </div>
    )
}