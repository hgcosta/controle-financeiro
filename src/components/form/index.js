import React, {useState} from 'react'
import Grid from '../grid';
import * as C from "./styles";



const Form = ({handleAdd, transactionsList, setTransactionsList}) => {

    const [desc, setDesc]= useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);
    const [mes, setMes] = useState("")
    const generateID = ()=> Math.round(Math.random()*1000);

    const handleSave = () =>{
        if(!desc || !amount){
            alert("Informe a descrição e o valor!");
            return;
        }else if (amount < 1){
            alert("O valor precisa ser positivo")
            return;
        };

        const transaction = {
            id: generateID(),
            desc:desc,
            amount:amount,
            expense: isExpense,
            mes:mes,
        };
        handleAdd(transaction);


        setDesc("");
        setAmount("");
        setMes("");
    }

   

    

  

  return (
    <>
    <C.Container>
        <C.InputContent>
            <C.Label>Descrição:</C.Label>
            <C.Input value={desc} onChange={(e)=> setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
            <C.Label>Valor:</C.Label>
            <C.Input value={amount} type="number" onChange={(e)=> setAmount(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
            <C.Label>Mês:</C.Label>
            <C.Input value={mes} onChange={(e)=> setMes(e.target.value)} />
        </C.InputContent>
        <C.RadioGroup>
            <C.Input type="radio" id="rIncome" defaultChecked name="group1" onChange={()=> setExpense(!isExpense)} />
            <C.Label HtmlFor="rIncome">Entrada</C.Label>
        </C.RadioGroup>
        <C.RadioGroup>
            <C.Input type="radio" id="irExpenses" name="group1" onChange={()=> setExpense(!isExpense)} />
            <C.Label HtmlFor="irExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>Adicionar</C.Button>
    </C.Container>
    <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  )
}

export default Form;