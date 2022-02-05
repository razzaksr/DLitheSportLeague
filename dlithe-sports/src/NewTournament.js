import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { inserting } from "./Bridge";

export const NewTournament=()=>{

    const [tournament,setTournament]=useState({

        "name":"",
        "startDate":"",
        "venue":"",
        "price":0
    })

    const gather=(eve)=>{
        const{name,value}=eve.target
        setTournament((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const schedule=async()=>{
        const t = await inserting(tournament)
        alert(t.data)
        clean()
    }

    const clean=()=>{
        setTournament(()=>{
            return{
                "name":"",
                "price":0,
                "venue":"",
                "startDate":""
            }
        })
    }

    return(
        <>
            <div className="row justify-content-center mt-lg-5">
                <div className="col-lg-8 col-md-10 col-sm-12 shadow p-5">
                    <h1 className="display-3 text-info text-center">New Tournament Schedule</h1>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Tournament name"
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
                        value={tournament.name}
                        onChange={gather}
                    />
                    <input type="date" 
                        className="form-control mt-2" 
                        name="startDate"
                        value={tournament.startDate}
                        onChange={gather}
                    />
                    <TextField id="outlined-basic" 
                        label="Venue" 
                        variant="outlined" 
                        className="form-control mt-2"
                        name="venue"
                        value={tournament.venue}
                        onChange={gather}
                    />
                    <InputLabel htmlFor="outlined-adornment-price">Price</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-price"
                        name="price"
                        value={tournament.price}
                        onChange={gather}
                        placeholder="Prize amount for winner"
                        className="form-control mt-2"
                        startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                        label="Price"
                    />

                    <div className="row justify-content-around mt-4">
                        <Button color="primary" className="col-3" onClick={schedule}>
                            <EventOutlinedIcon/>
                        </Button>
                        <Button color="error" className="col-3" onClick={clean}>
                            <ClearOutlinedIcon/>
                        </Button>
                    </div>

                </div>
            </div>
        </>
    )
}