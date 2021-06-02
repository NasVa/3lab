import React from 'react'
import backIm from '../../img/back3.png'
import './dayDoer.css'

export default function DayDoer(){
    return(
        <div>
            <div className="container1">
                <div style={{ backgroundImage: `url(${backIm})` }} id={'backIm'}>
                    <div id="dotd">Doer of the day </div>
                    <div id={'doerInf'}>
                        <img src={'https://www.belarus.by/relimages/000432_716792.jpg'} id={'doer'}/>
                            <div className="container">
                                <div id={'Bykov'}>Vasily Bykov</div>
                                <div id={'years'}>1924-2003</div>
                                <div id={'inf1'}>Belarusian and Soviet writer and public figure, participant of the Great Patriotic War, captain. People's Writer of Belarus.</div>
                                <div id={'inf2'}>Most of the works are stories set during the Great Patriotic War and show the moral choice of a person in the most dramatic moments of life.</div>
                                <a href="/PoetCard/1"><button type="button"  id={'pageButton'}  className="btn btn-warning">Page</button></a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}