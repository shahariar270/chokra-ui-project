import React, { use, useEffect } from 'react'
import { useParams } from 'react-router'
import { blogData } from '../../Utils/Helper';

export const Details = () => {
    const { title } = useParams();
    const [data, setData] = React.useState([]);

    const currentData = data.find(item => item.title === title);

    useEffect(() => {   
        blogData().then((data) => {
           setData(data);
        })
    }, []);


    return (
       <>
            <div className="details">
                <h1>{currentData?.title}</h1>
                <p>{currentData?.body}</p>
            </div>
       </>
    )
}
