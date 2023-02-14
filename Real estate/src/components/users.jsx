

import axios from 'axios';

import React, { useEffect, useState } from 'react';




export default function Users() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/get").then((response) => {


            setList(response.data);

        });
    }, []); 


    return (
        <>

        <br />



            <table class="table" id="usertable">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list && list.length > 0
                            ?
                            list.map((val) => {
                                return (
                                    <tr>
                                        <td>
                                            {val.id}
                                        </td>
                                        <td>
                                            {val.name}
                                        </td>
                                        <td>
                                            {val.age}
                                        </td>
                                        <td>
                                            {val.email}
                                        </td>
                                        <td>
                                            {val.phone}
                                        </td>
                                        <td>
                                            {val.password}
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"


                    }

                </tbody>
            </table>

           

        </>
    )

}