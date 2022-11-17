import React, {useState} from 'react'
import * as C from "./styles";



const Form = () => {

    const [desc, setDesc]= useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const handleSave = () =>{
        if(!desc || !amount){
            alert("Informe a descrição e o valor!");
            return;
        }else if (amount < 1){
            alert("O valor precisa ser positivo")
            return;
        }
    }


  return (
    <C.Container>
        <C.InputContent>
            <C.Label>Descrição:</C.Label>
            <C.Input value={desc} onChange={(e)=> setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
            <C.Label>Valor:</C.Label>
            <C.Input value={amount} type="number" onChange={(e)=> setAmount(e.target.value)} />
        </C.InputContent>
        <C.RadioGroup>
            <C.Input type="radio" id="rIncome" defaultChecked name="group1" onChange={()=> setExpense(!isExpense)} />
            <C.Label HtmlFor="rIncome">Entrada</C.Label>
        </C.RadioGroup>
        <C.RadioGroup>
            <C.Input type="radio" id="irExpenses" name="group1" onChange={()=> setExpense(!isExpense)} />
            <C.Label HtmlFor="irExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button>Adicionar</C.Button>
    </C.Container>    
  )
}

export default Form;