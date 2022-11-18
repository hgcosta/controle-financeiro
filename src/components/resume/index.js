import React from 'react'
import ResumeItem from '../resumeItem';
import * as C from './styles';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";


const Resume = ({income, expense, total}) => {
  return (
   <C.Cointainer>
       <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
       <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
       <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
   </C.Cointainer>
  )
}

export default Resume