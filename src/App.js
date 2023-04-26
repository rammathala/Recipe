import { useState } from 'react';
import './App.css';
import Food from './Food';
import Header from './Header';
import Axios from 'axios'
import Food1 from './Food1';

function App() {
  const [input, setinput] = useState('');
  const [data,setdata]= useState([]);
  const YOUR_APP_ID = 'f4e5b8f8';
  const YOUR_APP_KEY = '35250124e232e19cfbaa4d7795df9d59';
  const url = `https://api.edamam.com/search?q=${input}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
  function chan(e){
      setinput(e.target.value);
  }
  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setdata(result.data.hits);
    console.log(result.data.hits);
  };
 const searc = e =>{
    e.preventDefault();
   getRecipeInfo();
    setinput('')
  }
  return (
    <div className="App">
     <Header input={input} fun = {chan} search={searc}/>
      <Food1 data={data}/>
    </div>
  );
}

export default App;
