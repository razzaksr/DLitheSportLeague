import React, { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Carousel } from "react-bootstrap";

export const Login=()=>{

    const sizeStyle={
        "height":'400px'
    }

    const[auth,setAuth]=useState({
        "user":"",
        "pass":""
    })

    const verify=(eve)=>{
        const{name,value}=eve.target

        setAuth((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const log=()=>{
        if(auth.user==="arunsridhar"&&auth.pass==="reactspring")
        {
            localStorage.setItem("user",auth.user)
            window.location.assign("/home")
        }
        else{
            alert("Invalid credentials")
        }
    }

    const clean=()=>{
        setAuth(()=>{
            return{
                "user":"",
                "pass":""
            }
        })
    }

    return(<>
        <div className="container mt-lg-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <Carousel>
                        <Carousel.Item>
                            <img style={sizeStyle}
                            className="d-block w-100"
                            src="../pics/one.png"
                            alt="First slide"
                            />
                            <Carousel.Caption className="text-info">
                            <h3>React And Spring Boot Camp Jan 2022</h3>
                            <p>Web application interconnecting all framework together</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={sizeStyle}
                            className="d-block w-100"
                            src="../pics/two.png"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={sizeStyle}
                            className="d-block w-100"
                            src="../pics/three.png"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 align-self-center shadow p-4">
                    <h2 className="text-center text-danger">Login to DLithe Sports Buddy</h2>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Username"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                        name="user"
                        value={auth.user}
                        onChange={verify}
                        variant="standard"
                        className="form-control mb-3"
                    />
                    <input type="password" placeholder="Password here"
                        name="pass"
                        value={auth.pass}
                        onChange={verify}
                        className="form-control mb-3"
                    />
                    <div className="row justify-content-around">
                        <button className="btn btn-outline-primary col-3" onClick={log}>
                            Login
                        </button>
                        <button className="btn btn-outline-danger col-3" onClick={clean}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}