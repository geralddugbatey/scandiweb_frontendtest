import styled from "styled-components";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'
import {GrFormClose} from 'react-icons/gr'
import {Link} from 'react-router-dom'

import img from '../images/svg 2.png'
export const Div = styled.div`
  display: flex;
background:white;
  width: 100%;
height:100%;
z-index:3;

  position:fixed;
  top:0;
  left:${({flick})=>(
    flick ? '0' : '-200%'
  )};

transition: all 0.8s ease;
overflow:scroll;


`;

export const Drop1 = styled.div`

display: block;
position: absolute;

top:100%;
overflow-y : scroll;
background:#fff;
border: ${({turn1})=>(
  turn1 ? '1px' : '0px'
)} solid black;

 

@media screen and (max-width:990px){
  
  transform:translateX(-150px)
}


`





export const Drop2 = styled.div`

display: block;
position: absolute;

top:100%;
overflow-y : scroll;
background:#fff;
border: ${({turn2})=>(
  turn2 ? '1px' : '0px'
)} solid black;

 
@media screen and (max-width:990px){
  
  transform:translateX(-150px)
}


`



export const Heading=styled.div`

padding:1rem;
margin-bottom:0.3rem;

span{
  font-weight:700;
}

`

export const Bottom = styled.div`

width:80%;
display:flex;

justify-content:space-between;
padding:1rem;

p{
  font-weight:700;
}
`  

export const Plus = styled.div`

display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`
export const FirstDiv = styled.div`
p{
  margin:1rem;
}
max-width:9rem;
`
export const AttBox = styled.div `

padding:0;
height:1.8rem;
width:3.2rem;
text-align:center;
display:flex;
justify-content:center;
align-items:center;
background:${props=>props.color};
border: 1px solid  ${props=>props.border1};

`    

export const P1 = styled.p`
color:${props=>props.color}

`

export const Att = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

p{
  font-weight:700;
}

`

export const Att1 = styled.div`


div{
  margin-bottom:0.4rem;
}

p{
  font-weight:700;
}

`

export const SecondDiv = styled.div`
display:flex;
position: relative;

`
export const Pic = styled.div`



height:${props=>props.height};
width:${props=>props.width};


img{
  height:100%;
  width:100%;
  object-fit:contain;
  
}


`
export const Add = styled.div`

border:1px solid black;
background:#fff;
cursor: pointer;
display:flex;
justify-content:center;
align-items:center;

height:${props=>props.height};
width:${props=>props.width};


  

`

export const CartPageDiv =styled.div`


display: flex;
    padding: 1rem;
    justify-content:space-between;;
    margin-bottom:1rem;;
width:100%;
border-top:1px solid #E5E5E5;;

`

export const Right = styled.div`
display:flex;

`
export const Left = styled.div``


export const Drop = styled.div`

display: ${({turn})=>(
  turn ? 'block' : 'none'
)};
position: absolute;
height:50px;
z-index:99;
top:70%;
color:green;
padding:0;
background: rgba(255, 255, 255, 1);




div{
  margin:0.8rem;

  cursor: pointer;
}


;
`


export const ArrowPrice = styled(IoIosArrowDown)`


transform:${({turn})=>(
  turn ? 'translateY(4px) rotate(180deg)' : 'translateY(4px) rotate(0deg);'
)};
margin-left:0.8rem;
cursor: pointer;

`

export const ArrowPriceMedia = styled(IoIosArrowDown)`


transform:${({turn})=>(
  turn ? 'translateY(4px) rotate(180deg)' : 'translateY(4px) rotate(0deg);'
)};
margin-left:0.1rem;
cursor: pointer;

`




export const Click = styled(Link)`

text-decoration:none;

font-size:2rem;


color:rgba(94, 206, 123, 1);

`

export const Header = styled.div`
position:fixed;
top:0;


width:100%;
z-index:10;

`    
export const LinkP = styled.p`

`

export const MediaClick = styled(Link)`
text-decoration:none;
`



export const Slider = styled.div`
  white-space: nowrap;
  transition: 1000ms ease;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.div`
  overflow: hidden;
  position: relative;

  height: 60vh;

@media screen and (max-width:915px){
  order:1;


}

`;

export const Slide = styled.div`
  display: inline-block;

  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Tabs = styled.div`
  display: flex;

  flex-direction: column;

  padding: 1rem;
  justify-content: flex-start;
  align-items: flex-end;


@media screen and (max-width:860px){
  order:2;
  flex-direction: row;
  justify-content: center;
  align-items:center;
}


`;


export const Circle = styled.div `

height:30px;
width:30px;
background:black;
position:absolute;
bottom:0;
right:5%;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
transition:all 0.2s  ease-in-out;
transform:scale(${({open})=>(
  open? '1' : '0'
)});


`  

export const Img = styled.img`

    height:19px;
    width:19px;
    margin-right:2px;
    

`


export const Images = styled.div`
  height: 100px;
  width: 100px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
   
  }
  margin-bottom:0.5rem;
`;

export const First = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 25rem);
  width: 100%;

  grid-column-gap: 2vw;
margin-top:4rem;


`;

export const MediaHeader= styled.div`

display: grid;
  grid-template-columns: 1fr 1fr 1fr;

height:100%;


`

export const MediaLink = styled.div`

font-size: calc(0.7rem + 1vw);
margin:1rem;
height:30px;

transition: all 0.3s ease-in;


`


export const Attribute=styled.div`

display:flex;

flex-direction:column;

@media screen and (max-width:860px){
  order:3;


}

`

export const Filler1 = styled.div`

display:inline-flex;

color:white;



`

export const Over = styled.div`



`

export const Box = styled.div`
cursor: pointer;
height:1.8rem;
width:1.8rem;


display:flex;
justify-content:center;
align-items:center;
background:${props=>props.color};
padding:1rem;
text-align:center;
margin:1rem;

&:hover{

   border: 2px solid green;

}


`

export const Font = styled.p`

white-space: nowrap;
    color:${props=>props.font};
    font-size:${({size})=>(
        size ? '0.7rem' : 'initial'
    )};

`



export const Button = styled.div`
width: 292px;
height: 52px;
background:rgba(94, 206, 123, 1);
display:flex;
justify-content:center;
align-items:center;
cursor: pointer;
text-align:center;
opacity:${({tick})=>(
    tick?'1':'0'
)};
p{
    font-size:16px;
    color:white;
}
&:hover{
border: 1px solid white;
}

margin-top:2rem;
`

export const Display =styled.div`
width: 100px;
height:40px;
background:rgba(94, 206, 123, 1);
cursor: pointer;
display:flex;
justify-content:center;
align-items:center;
margin-bottom:0.5rem;
p{
    font-size:16px;
    color:white;
   ;
}


`

export const P = styled.p`

opacity:${({tick})=>(
    tick?'1':'0'
)};

margin-top:2rem;

`


export const Dot =styled.div`

top:${({send})=>(
  send ? 'initial' : '-100%'
)};
height:20px;
width:20px;
border-radius:50%;
background:black;
position: absolute;
transform:translate(12px,-11px);
display:flex;
align-items:center;
justify-content:center;
padding:0.1rem;
p{
  color:white;
  margin-bottom:0.1rem;
}



`




export const D = styled.div`

position:absolute;
bottom:0;
right:0;
display:flex;

width:500px;

height:500px;

background:red;
`




export const Cover = styled.div`


top:0;
position:absolute;
width:100%;
height:100%;
opacity:0.8;
background:white;
display:${({display})=>(
  display ? 'none' : 'flex'
)};
align-items:center;
justify-content:center;





`   



export const Final = styled.div`


padding:1rem;
display:flex;
width:85%;
justify-content:space-between;
margin:auto;

`


export const FButton = styled.div`
cursor: pointer;
padding:1rem;
display:flex;
justify-content:center;
align-items:center;
color:black;
border:1px solid black;

p{
white-space: nowrap;


}

`

export const FButton1 = styled.div`
cursor: pointer;
padding:1rem;
display:flex;
justify-content:center;
align-items:center;

background:rgba(94, 206, 123, 1);;

p{
  color:white;
white-space: nowrap;

}



`

export const LinkC = styled(Link)`

  text-decoration:none;


`

export const Background = styled.div`

height:30px;
width:35px;

background:url(${img});
background-repeat:no-repeat;
background-size:contain;
background-position:center;
margin:auto;
display:flex;
justify-content:center;
align-items:center;
margin-top:1rem;
margin-left:13rem;
img{

height:10px;

object-fit:contain;
}





`
export const Background1 = styled.div`

height:30px;
width:35px;

background:url(${img});
background-repeat:no-repeat;
background-size:contain;
background-position:center;

display:flex;
justify-content:center;
align-items:center;
margin-top:1rem;

img{

height:10px;

object-fit:contain;
}





`









export const Arrow = styled(BsFillArrowLeftCircleFill)`

font-size:2rem;
color:rgba(94, 206, 123, 1);
cursor: pointer;
position:fixed;
z-index:11;
display:${({flick})=>(
    flick ? 'initial' : 'none'
  )};
right:0;
transform: translateX(-20px) translateY(70px);
`

export const Banner = styled.div`

position:fixed;
z-index:12;
width:100%;
background:black;
color:white;
text-align:center;

top:${({active})=>(
  active ? '0' : '-100%'
)};

transition: all 0.4s ease-in-out;

padding:1rem;

h1{
  font-size:1rem;
};


`    