import React from 'react'
import ResumeItem from '../resumeItem';
import * as C from './styles';


const Resume = () => {
  return (
   <C.Cointainer>
       <ResumeItem/>
       <ResumeItem/>
       <ResumeItem/>
   </C.Cointainer>
  )
}

export default Resume