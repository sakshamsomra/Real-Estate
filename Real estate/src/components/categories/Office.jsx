

import axios from 'axios';

import React, { useEffect, useState } from 'react';




export default function Buysell() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/locations/office").then((response) => {


            setList(response.data);

        });
    }, []); 



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