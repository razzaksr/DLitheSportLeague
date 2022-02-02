import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const NewTournament=()=>{
    return(
        <>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 shadow p-3">
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
                    />
                    <input type="date" 
                    className="form-control mt-2" 
                    name="startDate"/>
                    
                </div>
            </div>
        </>
    )
}