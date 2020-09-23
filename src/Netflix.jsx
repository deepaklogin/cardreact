import React from 'react';
import Sdata from './Sdata';
import Card from './Cards';
const Netflix=()=>{
return(<>
    <Card
        key={Sdata[1].id}
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        series={Sdata[1].series} 
        link={Sdata[1].link}/>
    <Card
        key={Sdata[2].id}
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        series={Sdata[2].series} 
        link={Sdata[2].link}/>
        </>
);
};
export default Netflix;