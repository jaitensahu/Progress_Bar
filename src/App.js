import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [value, setvalue] = useState(0);
  const [statuss, setStatus]=useState("Loading Data...")

  // function abc(){
  useEffect(() => {
    if (value < 100) {
      let interval = setInterval(() => {
        setvalue((prev) => {
          return (prev += 1);
        });
      }, 200);
      return () => {
        clearInterval(interval);
      };
    }else{
      setStatus("Complete")
    }
  }, [value]);

// }

  //  let interval= setInterval(()=>{
  // console.log(i++);
  //   setvalue(i)
  //   if(i>100){
  //     clearInterval(interval);
  //   }
  //   i++;
  // },2000)

  return (
    <div className="App">
      <p>Progress Bar</p>
      <div className="barContainer">
      <div className="bar" style={{width:`${value}%`}}>
        <p>{value}%</p></div>
      </div>
      <p>{statuss}</p>
  
    </div>
  );
}

export default App;
