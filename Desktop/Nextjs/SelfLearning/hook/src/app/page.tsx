'use client'
import { useState } from "react";


export default function Home() {
  const [count , setCount] = useState(0)
  const increment = ()=> setCount(count + 1)
  return (
    <>
    <h1>
      Count : {count}
    </h1>
    <button onClick={increment}>Increment</button>
    </>
  );
}
