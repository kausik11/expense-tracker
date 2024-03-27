import React from 'react'
import './ExpenseForm.css'
import { useState } from 'react'

function ExpenseForm(props) {
   
  const[enterTitle,setEnterTitle] = useState('');
  const[enterAmount,setEnterAmount] = useState('');
  const[enterDate,setEnterDate] = useState('');
  

  const Titleshow = (e)=>{
    setEnterTitle(e.target.value);
  }
  const Amountshow = (e)=>{
    setEnterAmount(e.target.value);
  }
  const Dateshow = (e)=>{
   setEnterDate(e.target.value);
  }

  const submitForm = (e)=>{
   e.preventDefault();
   const ExpenseData = {
       title : enterTitle,
       amount : enterAmount,
       date : new Date(enterDate)
   }

   props.saveFormData(ExpenseData);

   console.log(ExpenseData);
   setEnterTitle('');
   setEnterDate('');
   setEnterAmount('');

  }



  return (
    <form onSubmit={submitForm}>
        <div className='.new-expense__controls'>
         <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange={Titleshow} value={enterTitle} />
         </div>


         <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' onChange={Amountshow} value={enterAmount}/>
         </div>


         <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' onChange={Dateshow} value={enterDate}/>
         </div>

      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
    
  )
}

export default ExpenseForm
