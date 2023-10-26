import React,{useEffect,useState} from 'react'
import axios from 'axios'
const UseEffectHook=()=> {
    const [postData,setPostData]=useState([])
useEffect(()=>{
    const getPostData=async()=>{
        try{
            const postResponse=await axios.get("https://jsonplaceholder.typicode.com/comments");
            setPostData(postResponse.data)
        }
        catch(errror)
        { console.log(errror)}
    }

getPostData()
},[])
console.log(postData)
    return (
    <div>
      <h2>API Integration with function component:</h2>
      <h2>Use of useEffect hook</h2>
      <div>
        <table style={{border:"1px solid black"}}>
            <thead style={{border:"1px solid black"}}>
                <tr style={{border:"1px solid black"}}>
                    <th>Post Id</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody style={{border:"1px solid black"}}>
                {postData.map(post=>(
                    <tr style={{border:"1px solid black"}} key={post.postId}>
                        <td style={{border:"1px solid black"}}>{post.postId}</td>
                        <td style={{border:"1px solid black"}}>{post.id}</td>
                        <td style={{border:"1px solid black"}}>{post.name}</td>
                        <td style={{border:"1px solid black"}}>{post.email}</td>
                        <td style={{border:"1px solid black"}}>{post.body}</td>

                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default UseEffectHook
