import React from 'react';
import '../Details/Users.css'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <div className='flex gap-4 justify-center mt-6'>
                {
                    pageNumbers?.map(number => <>
                        <div >
                            <ul>
                                <li key={number}>
                                    <a onClick={() => paginate(number)} href="#%" className='btn btn-active button-design'>
                                        {number}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Pagination;