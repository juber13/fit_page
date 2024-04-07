import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

const Details = () => {
    const param = useParams();
    const [criteria, setCriteria] = useState([]);
    const [name, setName] = useState({});
    const fetchData = async () => {
        const res = await fetch(`/api/v1/allList/${param.id}`)
        const data = await res.json();
        if (data.success) {
            setName({ text: data.data.name, type: data.data.type })
            setCriteria(data.data.criteria)


        }
    }
    useEffect(() => {
        fetchData();

    }, [])

    // console.log(result)

    return (
        <div className='bg-slate-200 max-w-xl mt-0 m-auto p-2 shadow-md rounded-sm '>
                <p>{name.type}</p>
                <p>{name.text}</p>
            <div className='flex flex-col gap-3 my-3'>
                {criteria.map((item, index) => <p className='text-slate-600 text-md' key={index}>{item.text}</p>)}
            </div>
        </div>
    )
}

export default Details