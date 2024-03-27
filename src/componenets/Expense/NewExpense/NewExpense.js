import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {

    
  const childtoParentDataTrans = (enterExpenseData)=>{
    //creating another object that coming from ExpenseForm.js
    const CommingExpenseData = {
      ...enterExpenseData,
      id: Math.floor(Math.random()*10).toString(),
    }
    props.saveExpenseFormData(CommingExpenseData);
    console.log(CommingExpenseData);
  }

  
 

  return (
   <div className='new-expense'>
        <ExpenseForm  saveFormData={childtoParentDataTrans}/>
      
      {/* <input type='text' onChange={show} value={inputText}/>
        <button onClick={ChangeTitle}>Click Me</button> */}
    </div>
  )
}

export default NewExpense
