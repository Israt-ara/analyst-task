import React, { useEffect, useState } from 'react';
import Users from '../Details/Users';

import Pagination from '../Pagination/Pagination';

const PeopleData = () => {

    const [datas, setdatas] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(3)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setdatas(data)
            })

    }, [])

    // Current Page finding
    const indexOfLastPage = currentPage * postPerPage
    const indexOfFastPage = indexOfLastPage - postPerPage
    const currentPosts = datas.slice(indexOfFastPage, indexOfLastPage)

    //  Change the pages
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div>

            <div className='container mx-auto p-12'>
                {
                    currentPosts?.map(data => <Users key={data.id} data={data} />)
                }
                <Pagination postPerPage={postPerPage} totalPosts={datas.length} paginate={paginate}></Pagination>
            </div>
        </div>
    );
};

export default PeopleData;