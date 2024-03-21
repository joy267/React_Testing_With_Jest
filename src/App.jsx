import './App.css';
import download from "./download.jpeg"
import { useState } from 'react';

function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
    <p>My first React test case</p>

    {/* <input type='text' placeholder='Enter username' name='username' id='userId' readOnly value="a"/> */}
    {/* <input type='text' placeholder='Enter Username' value= {data} onChange={(e)=>setData(e.target.value)}/> */}
    {/* <input type='text' placeholder='Enter Username' value= {data} onChange={(e)=>setData(e.target.value+"@gmail.com")}/> */}

    <br/>
    <br/>

    <h1>Please on the Login Button</h1>
    <button onClick={()=>setData('Login Successfully')}>Login</button>
    <h1>{data}</h1>

    <br/>
    <br/>

    <img title= "Dog" src={download} alt="image" />

  </div>
  
  );
}

export default App;
