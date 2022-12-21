import { useState } from "react";

const { useEffect } = require("react")

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - in Capture Photography`;
    },[title])
}

export default useTitle;


