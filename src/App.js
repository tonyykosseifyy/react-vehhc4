import React,{ useState , useEffect } from "react";
import "./style.css";
import styled from "styled-components";

const links = ["a" , "b" , "c" , "d"];


const Bar = styled.div`
  left: ${(props) => props.left}px;
  opacity : ${props => props.opacity};
  transition:${({ first }) => first ? ".3s" : "opacity .3s"} ;
`

const App = () => {
  const [ hover , setHover ] = useState(false);
  const [ hoverIndex , setHoverIndex ] = useState("none");
  const [ first , setFirst ] = useState(-1) ;
  return (
    <nav 
      onMouseLeave={() => {
        setHover(false)
        setFirst(-1)
      }} 
      onMouseOver={() => {
        setHover(true)
      }}
    >
      <Bar 
      opacity={hover ? "1" : "0"} 
      left={hoverIndex * 40} 
      first={first} />
      { links.map((item , index) => (
        <a 
          key={index} 
          href="#"
          onMouseOver={() => {
            setHoverIndex(index);
            setFirst(first+1)
          }}
        >{item}</a>
      ))}
      {hover ? "hovred" : "none"}
      {hoverIndex}
    </nav>
  );
};


export default App ;



