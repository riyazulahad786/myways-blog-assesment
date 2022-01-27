import { makeStyles,Box,Typography } from "@material-ui/core";

const useStyles=makeStyles({
    image:{
        width: '100%',
        background: `url(${'https://media.istockphoto.com/photos/data-scientists-male-programmer-using-laptop-analyzing-and-developing-picture-id1295900106?b=1&k=20&m=1295900106&s=170667a&w=0&h=kQ2UWilU4Bild5aP03CaF65gMbSI-chG--7dd2oS8GM='}) center/55% repeat-x #000`,
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 70,
            color: '#FFFFFF',
            lineHeight: 1
        },
        '& :first-child': {
            fontSize: 70,
            color: '#FFFFFF',
            lineHeight: 1
        },
        '& :last-child': {
            fontSize: 20,
            background: '#FFFFFF',
        }
    }
})
//import React from "react";
//import { Component } from "react";

const Banner = ()=>{
    const classes=useStyles();
    const url='https://static.toiimg.com/thumb/msid-87597279,width-1200,height-900,resizemode-4/.jpg';
    return(
    
           <>
            <Box className={classes.image}>
                <Typography>Blog</Typography>
                <Typography>Myways</Typography>
            </Box>
        
       </>
    )
}

export default Banner;