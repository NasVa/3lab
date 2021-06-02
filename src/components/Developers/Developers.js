import React from 'react'
import Nastya from '../../img/Nastya1.png'
import  Darya from '../../img/Darya1.png'
import './developers.css'
import backIm from "../../img/back4.png";

export default function Developers(){
    return(
        <body>
            <div style={{ backgroundImage: `url(${backIm})` }} id={'backIm'}>
                <div id="dev"> DEVELOPERS</div>
                <div id="developers">
                    <div className="developer1">
                        <div className="nick"> Nastya</div>
                        <img src={Nastya} id={'NastyaIm'}/>
                        <a href="https://github.com/NasVa"><button type="button" id={'gitBut1'} className="btn btn-dark">GitHub</button></a>
                    </div>
                    <div className="developer2">
                        <div className="nick"> Darya</div>
                        <img src={Darya} id={'DaryaIm'}/>
                        <a href="https://github.com/darya-cherr"><button type="button" id={'gitBut2'} className="btn btn-dark">GitHub</button></a>
                    </div>
                </div>
            </div>
        </body>
    )
}