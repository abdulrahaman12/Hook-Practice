import React, { useState } from 'react';
import data from "./../json/MOCK_DATA"

const SearchTable = () => {

    const [search, setSearch] = useState("");

    return (
        <div>
            <h3 className='text-center mt-4 mb-4'>Search Table</h3>
            <form>
                <input type="text" value={search} placeholder='search data' onChange={(e) => setSearch(e.target.value)} className='form-control w-25 m-3' />
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter((item) => {
                        return search === "" ? item : item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                            item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                            item.email.toLowerCase().includes(search.toLowerCase()) ||
                            item.gender.includes(search) ||
                            item.address.toLowerCase().includes(search.toLowerCase())
                    }).map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.address}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div>
    )
}

export default SearchTable

// Use keyword filter and includes for search filter 

