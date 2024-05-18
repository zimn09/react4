import { useState } from 'react'


function App() {
let [x, setX] = useState();
let [x1, setX1] = useState();
let [x2, setX2] = useState();
let [x3, setX3] = useState();
let [x4, setX4] = useState();
let [x5, setX5] = useState();
let [x6, setX6] = useState();
let [x7, setX7] = useState();
let [x8, setX8] = useState();

document.addEventListener('contextmenu', event => event.preventDefault());

const change = (event) => {
  if(x == "X"){
    setX();
  }
  else{
  setX("X");
  }
  
}
const change1 = (event) => {
  if(x1 == "X"){
    setX1();
  }
  else{
  setX1("X");
  
}
}
const change2 = (event) => {
  if(x2 == "X"){
    setX2();
  }
  else{
  setX2("X");}
  
}
const change3 = (event) => {
  if(x3 == "X"){
    setX3();
  }
  else{
  setX3("X");}
  
}
const change4 = (event) => {
  if(x4 == "X"){
    setX4();
  }
  else{
  setX4("X");}
  
}
const change5 = (event) => {
  if(x5 == "X"){
    setX5();
  }
  else{
  setX5("X");}
  
}
const change6 = (event) => {
  if(x6 == "X"){
    setX6();
  }
  else{
  setX6("X");}
  
}
const change7 = (event) => {
  if(x7 == "X"){
    setX7();
  }
  else{
  setX7("X");
  }
  
}
const change8 = (event) => {
  if(x8 == "X"){
    setX8();
  }
  else{
  setX8("X");
  }
  

}
const cnge = (event) => {
  if(x == "O"){
    setX("O");
  }
  else{
  setX("O")}
}
const cnge1 = (event) => {
  if(x1 == "O"){
    setX1("O");
  }
  else{
  setX1("O")}
}
const cnge2 = (event) => {
  if(x2 == "O"){
    setX2("O");
  }
  else{
  setX2("O")}
}
const cnge3 = (event) => {
  if(x3 == "O"){
    setX3("O");
  }
  else{
  setX3("O")}
}
const cnge4 = (event) => {
  if(x4 == "O"){
    setX4("O");
  }
  else{
  setX4("O")}
}
const cnge5 = (event) => {
  if(x5 == "O"){
    setX5("O");
  }
  else{
  setX5("O")}
}
const cnge6 = (event) => {
  if(x6 == "O"){
    setX6("O");
  }
  else{
  setX6("O")}
}
const cnge7 = (event) => {
  if(x7 == "O"){
    setX7("O");
  }
  else{
  setX7("O")}
}
const cnge8 = (event) => {
  if(x8 == "O"){
    setX8("O");
  }
  else{
  setX8("O")}
}
return(
  <div className='container'>
    <button className='edit'>Edit mod</button><button className='AI'>play vs AI</button><button className='frnd'>play vs friend</button><br></br>
    <button onClick={change} onWheel={cnge} className='b1'>{x}</button>
    <button onClick={change1} onWheel={cnge1} className='b2'>{x1}</button>
    <button onClick={change2} onWheel={cnge2} className='b3'>{x2}</button><br></br>
    <button onClick={change3} onWheel={cnge3} className='b4'>{x3}</button>
    <button onClick={change4} onWheel={cnge4} className='b5'>{x4}</button>
    <button onClick={change5} onWheel={cnge5} className='b6'>{x5}</button><br></br>
    <button onClick={change6} onWheel={cnge6} className='b7'>{x6}</button>
    <button onClick={change7} onWheel={cnge7} className='b8'>{x7}</button>
    <button onClick={change8} onWheel={cnge8} className='b9'>{x8}</button>
    
  </div>
  
)
}

export default App
