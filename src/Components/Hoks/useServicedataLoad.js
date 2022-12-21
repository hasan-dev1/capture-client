import { useEffect } from "react"
import { useState } from "react"

const useServiceLoadData = ()=>{
    const [service, setService] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch(`https://captureserver.vercel.app/allservices`)
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setService(data);
        })
    },[])

    return {service, loading}
    
}

export default useServiceLoadData;