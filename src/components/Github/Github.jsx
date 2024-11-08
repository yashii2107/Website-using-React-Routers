import React, { useState} from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()

    // const [data , setData] = useState([])
    // useEffect(()=>{
    // fetch('https://api.github.com/users/yashii2107')
    // .then(response =>response.json())
    // .then(data=>{
    //     console.log(typeof(data));
    //     setData(data)
    // })
    // },[])

  return (
    <div className='bg-gray-600 text-4xl text-white text-center p-6 m-20 '>
      Github followers: {data.followers +40 } 
      <img src={data.avatar_url} alt="" />

      {/* render data in li */}
      {/* <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
           {key}: {value}
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default Github

export const githubInfo = async ()=>{
    const response = await fetch('https://api.github.com/users/yashii2107')
    return response.json()
}
