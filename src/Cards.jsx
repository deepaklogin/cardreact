import React from 'react';
import Images from './Images';
import Heading from './Heading';
function Card(props)
{
    return(<>
        <div className="cards">
            <div className="card">      
                <Images imgsrc={props.imgsrc}/>         
                <div className="card_info">
                    <span className="card_category">{props.title}</span>
                        <Heading series={props.series}/>
                    <a href={props.link}>
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    </>);
}
export default Card;