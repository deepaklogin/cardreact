import React from 'react';
import Sdata from './Sdata';
import Card from './Cards';
const Amazon=()=>{
return(
    <Card
        key={Sdata[4].id}
        imgsrc={Sdata[4].imgsrc}
        title={Sdata[4].title}
        series={Sdata[4].series} 
        link={Sdata[4].link}/>
);
};
export default Amazon;