import React from 'react';
import styled  from 'styled-components'

const OuterCard=  styled.div`
width:${(props)=>props.width};
height:${(props)=>props.height};
border:1px solid ${(props)=>props.border};

`;

const Card = (props) => {  
  return <OuterCard {...props} />
}

export default Card;