import React, { useEffect,useState } from 'react'
import { getCookie } from '../cookies'

export default function Dashboard() {
    const [user,setUser] = useState();
    useEffect(()=>{
        if(getCookie("auth")) {
            setUser(JSON.parse(getCookie("auth")));
        }
    },[])

    return (
    <div className='mt-[7vh] h-[100vh]'>
        {/* {console.log(user)} */}
        
        <img className='rounded-full' src={user?.picture} />
        hello {user?.name}

    </div>
    )
}
