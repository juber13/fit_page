import React, { useEffect, useState } from 'react';

import {useNavigate} from 'react-router-dom'

const Home = () => {
    const [result, setResult] = useState([]);
    const navigate = useNavigate();
    const fetchData = async () => {
        try {
            const res = await fetch('/api/v1/allList');
            const data = await res.json();
            if (data.success === true) {
                setResult(data.data)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const getDetails = (id) => {
        navigate(`/criteria/${id}`)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='bg-slate-100 max-w-xl flex-col m-auto flex gap-6 p-3 '>
            {result.map((list, index) => {
                return (
                    <div key={index} className='bg-slate-100 p-3 rounded-lg shadow-md'>
                        <p className='text-slate-600 font-semibold cursor-pointer' >{list.name}</p>
                        <button className='text-green-400 border p-1 text-sm bg-white rounded-md' onClick={() => getDetails(list.id)}>{list.tag}</button>
                    </div>
                )
            })}
        </div>
    );
}

export default Home;
