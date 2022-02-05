import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collecting, enrolling } from "./Bridge";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';

export const Athlete=()=>{
    const{position}=useParams()

    const[athlete,setAthlete]=useState({
        "name":"",
        "contactNo":0,
        "weight":0.0,
        "tournament":{}
    })

    useEffect(()=>{
        gather()
    },[])

    const gather=async()=>{
        const t = await collecting()
        setAthlete((old)=>{
            return{
                ...old,
                "tournament":t.data[position]
            }
        })
    }

    const prepare=(eve)=>{
        const{name,value}=eve.target
        setAthlete((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const enroll=async()=>{
        alert(JSON.stringify(athlete))
        const t = await enrolling(athlete)
        alert(t.data)
    }

    const clean=()=>{
        setAthlete(()=>{
            return{
                "name":"",
                "contactNo":0,
                "weight":0.0,
                "tournament":{}
            }
        })
    }

    return(
        <>
            {athlete.tournament.name}
            <div className="row justify-content-center mt-lg-5">
                <div className="col-lg-8 col-md-10 col-sm-12 shadow p-5">
                    <h1 className="display-3 text-info text-center">Athlete Enrollment</h1>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Athlete name"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                        className="form-control"
                        name="name" 
                        value={athlete.name}
                        onChange={prepare}
                    />
                    <TextField id="outlined-basic" 
                        label="Contact Number" 
                        variant="outlined" 
                        className="form-control mt-2"
                        name="contactNo"
                        value={athlete.contactNo}
                        onChange={prepare}
                    />
                    <TextField id="outlined-basic" 
                        label="Tournamenet Selected" 
                        variant="outlined" 
                        className="form-control mt-2"
                        name="tournament"
                        value={athlete.tournament.name}
                    />
                    <InputLabel htmlFor="outlined-adornment-weight">Weight</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-"
                        name="weight"
                        value={athlete.weight}
                        onChange={prepare}
                        placeholder="Athlete weight"
                        className="form-control mt-2"
                        startAdornment={<InputAdornment position="start">KG.</InputAdornment>}
                        label="Weight"
                    />
                    <div className="row justify-content-around mt-4">
                        <Button color="primary" className="col-3" onClick={enroll}>
                            Enroll
                        </Button>
                        <Button color="error" className="col-3" onClick={clean}>
                            Reset
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}