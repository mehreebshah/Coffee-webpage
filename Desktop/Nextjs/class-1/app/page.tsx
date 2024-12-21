"use client";
import axios from "axios";
import { useState } from "react";
function Homepage(){
    const [Images, setImages] = useState([])
    const getImages =async()=>{   
     try {
        const response = await axios.get("https://picsum.photos/v2/list")
       const data = response.data
       console.log(data)
       setImages(data);
       
    } catch (error) {
        console.log('Error Fetching...')
     }
    }
  return(
        <div>
            <button onClick={getImages} className="px-5 py-3 bg-blue-400 text-white font-bold rounded">Get Images</button>
        <div>
            {Images.map((elem)=>{
                
            })}
        </div>
        </div>
        
  )

}
export default Homepage