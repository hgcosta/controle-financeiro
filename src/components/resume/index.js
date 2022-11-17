import React from 'react'
import ResumeItem from '../resumeItem';
import * as C from './styles';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";


const Resume = () => {
  return (
   <C.Cointainer>
       <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="R$ 1.000,00" />
       <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="R$ 500,00" />
       <ResumeItem title="Total" Icon={FaDollarSign} value="R$ 1.500,00" />
   </C.Cointainer>
  )
}

export default Resume