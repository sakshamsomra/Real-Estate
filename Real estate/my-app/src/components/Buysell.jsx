

import axios from 'axios';

import React, { useEffect, useState } from 'react';




export default function Buysell() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/locations").then((response) => {


            setList(response.data);

        });
    }, []); 



    const Delete = (id) => {

        const ans = id;
        axios.delete(`http://localhost:3000/api/items/${ans}`).then(() => {

        }).then(() => {

            window.location.reload();

        })

    }



    return (
        <>

            <br />

            <table class="table" id="usertable">
                <thead>
                    <tr>
                        <th scope="col">Location</th>
                        <th scope="col">Category</th>
                        <th scope="col">Landmark</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Actions</th>
                        
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
                                            {val.Location}
                                        </td>
                                        <td>
                                            {val.Category}
                                        </td>
                                        <td>
                                            {val.LandMark}
                                        </td>
                                        <td>
                                            {val.Contact}
                                        </td>
                                        <td>
                                        <button type="button" class="btn btn-danger" onClick={() => Delete(val.id)}>Delete</button>
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