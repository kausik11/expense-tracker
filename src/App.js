// import { useState } from 'react'
// import React from 'react'
// import {sculptureList} from './Data'


// function App() {
//   const[index,setIndex] = useState(0);
//  const ShowNext = ()=>{ if(index < sculptureList.length-1){setIndex(index + 1);}else{
//    setIndex((sculptureList.length-1)-index)
//  }}
//   return (
//     <div>
//       <button onClick={ShowNext} className='btn'>Next</button>
//       <p>{sculptureList[index].name}</p>
//       <img src={sculptureList[index].url}></img>
//       <p>{sculptureList[index].description}</p>
//       <p style={{fontWeight : `${600}`}}>This is alt of the above image :{sculptureList[index].alt}</p>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'
import './App.css'
import NewExpense from './componenets/Expense/NewExpense/NewExpense';
import Expenses from './componenets/Expense/Expenses';
//sample data array obj
let DummyExpense = [];


export default function App() {

    //add the form input to the existing dummy expense
   const[expenses, setExpenses] = useState(DummyExpense);
    

    
      

    //sample data
    // let ExpenseDate = new Date('2024, 1, 25');
    // let expenseTitle = 'CAR INSURENCE';
    // let expenseAmount = 300;
    
   //function to acess data from child component
   const ExpenseFromData = (NewExpenseFormData)=>{
       setExpenses([NewExpenseFormData,...expenses]);
       
   }
   console.log(expenses);
    
    return (
        <div className='expenses'>
            <h2>Expense Tracker App</h2>
            {/* <ExpenseItem 
            date={ExpenseDate} 
            title={Expensetitle} 
            amount={ExpenseAmount}>
            </ExpenseItem>

            <ExpenseItem 
            date={ExpenseDate} 
            title={Expensetitle} 
            amount={ExpenseAmount}>
            </ExpenseItem> */}


           

            {/* {ExpenseData.map(expnse=>
              <ExpenseItem
              id={expnse.id} 
              date={expnse.date} 
              title={expnse.title}
              amount={expnse.amount}
              />)} */}
              <NewExpense saveExpenseFormData={ExpenseFromData}/>
              <Expenses item={expenses}/>
            
        </div>

    )
    
}
