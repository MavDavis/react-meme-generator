import React, { useState } from "react";
import {AiFillStar} from 'react-icons/ai'
export default function Star (props){
    const {handleClick, res} = props
    return (
        <>
        <AiFillStar  className={res?'red':'grey'} onClick={handleClick}/>
        </>
    )
}