import React, { useEffect } from 'react'
import { getCookie } from '../cookies'

export default function Dashboard() {

    const user = JSON.parse(getCookie("auth"));

    return (
    <div className='mt-[7vh] h-[100vh]'>
        hello {user.name}

    </div>
    )
}
