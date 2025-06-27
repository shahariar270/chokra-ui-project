import React, { use, useEffect } from 'react'
import { useParams } from 'react-router'
import { blogData } from '../../Utils/Helper';
import { Loading } from '../Loadding';

export const Details = () => {
    const { title } = useParams();
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const currentData = data.find(item => item.title === title);

    useEffect(() => {
        blogData().then((data) => {
            setData(data);
            setLoading(false);
        })
    }, []);


    return (
        <>
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div className="details">
                    <h1>{currentData.title}</h1>
                    <p>{currentData.body}</p>
                </div>
            )}
        </>
    )
}
