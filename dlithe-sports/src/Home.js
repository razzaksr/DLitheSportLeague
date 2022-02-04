import React, { useEffect, useState } from "react";
import { collecting } from "./Bridge";

export const Home=()=>{
    const[every,setEvery]=useState([])

    useEffect(()=>{
        gather()
    },[])

    const gather=async()=>{
        const t = await collecting()
        setEvery(t.data)
    }

    return(
        <>
            <div className="container mt-lg-5">
                <div className="row justify-content-center">
                    <div className="table-responsive-md">
                        <table className="table table-bordered table-hover shadow">
                            <thead className="bg-info text-danger">
                                <tr>
                                    <th>Tournament Id</th><th>Tournament Name</th>
                                    <th>Tournament Start Date</th>
                                    <th>Tournament Venue</th>
                                    <th>Tournament Participants</th>
                                    <th>Tournament Winner</th>
                                    <th>Tournament Prize Money</th>
                                </tr>
                            </thead>
                            <tbody className="bg-danger text-info">
                                {every.map((obj,index)=>(
                                    <tr className="text-center">
                                        <td>{obj.tournamentId}</td>
                                        <td>{obj.name}</td>
                                        <td>{new Date(obj.startDate).toISOString()}</td>
                                        <td>{obj.venue}</td>
                                        <td>{obj.participants.length}</td>
                                        <td>{obj.winner}</td>
                                        <td>{obj.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}