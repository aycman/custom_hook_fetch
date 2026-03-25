import React from 'react';
import useFetch from './UseFetch';
import './FetchData.css';


const FetchYogaData = () => {
    const [data]=useFetch("https://api.npoint.io/4459a9a10e43812e1152");
    console.log(data);
    return(
        <>
        <h3>Yoga Benefits</h3>
        <ul className='list_data_main'>
            {data && data.map((e, index)=>(
                <>
                <li key={index} className='list_data'></li>
                <p><strong>Name:</strong>{e.name}</p>
                <p><strong>Benefits: </strong>{e.benefits}</p>
                <p><strong>Time: </strong>{e.time_duration}</p>
                </>
            ))}
        </ul>
        
        </>
    )
}
export default FetchYogaData