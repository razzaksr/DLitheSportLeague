import React, { useEffect, useState } from "react";
import { collecting } from "./Bridge";
import Button from '@mui/material/Button';

export const Past=()=>{
    const[every,setEvery]=useState([])
    const[aview,setAview]=useState(false)
    const[pos,setPos]=useState(0)

    useEffect(()=>{
        gather()
    },[])

    const gather=async()=>{
        const t = await collecting()
        setEvery(t.data.filter((data)=>{
            return data.winner !== null
        }))
    }
    return(<>
        <div className="container mt-lg-2">
            <div className="d-flex flex-row flex-nowrap overflow-auto p-4">
                {every.map((data,index)=>(
                    <div className="card col-lg-4 col-md-6 col-sm-12 text-light bg-info p-4 me-3 mt-3">
                        <h1 className="text-center card-title">{data.name}</h1>
                        <hr color="blue"/>
                        <div className="card-body">
                            <p className="card-text text-center">{data.tournamentId}</p>
                            <p className="float-start">{data.startDate}</p>
                            <p className="float-end">{data.winner}</p>
                            <p>{data.venue}</p>
                        </div>
                        <Button color="success" className="text-center" onClick={()=>{
                            setAview(true)
                            setPos(index)
                            }}
                            
                            onDoubleClick={()=>{setAview(false)}}>
                            View Participants
                        </Button>
                    </div>
                ))}
            </div>
            {(aview)?
            <>
                <div className="row justify-content-center">
                    {every[pos].participants.map((data)=>(
                        <div className="card col-lg-3 col-md-6 col-sm-12 text-info bg-danger ms-2 mt-2">
                            <h1 className="text-center card-title">{data.name}</h1>
                            <hr color="blue"/>
                            <div className="card-body">
                                <p className="card-text text-center">{data.enrollId}</p>
                                <p className="float-start">{data.contactNo}</p>
                                <p className="float-end">{data.weight}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>:<></>}
        </div>
    </>);
}