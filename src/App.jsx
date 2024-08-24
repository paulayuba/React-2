
import { useEffect, useState } from 'react'

const App = () => {
  const [name, setName] =useState("favour")
  const [age, setAge] =useState(67)
  useEffect(() =>{

  console.log("Hello wold")
  }, [age])

  return (
<div>
<p>{name} is {age}</p>
<div className='space-x-4 text-center'>
<button className='bg-blue-600 text-white rounded-sm py-4 px-6' onClick={() =>setName("Geofrey")}>change name</button>


<button className='bg-yellow-400 text-white rounded-sm py-4 px-6' onClick={() =>setAge(30)}>changes age</button>
</div>


</div>

  )
}

export default App
