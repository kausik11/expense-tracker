import React from 'react'
import ExpenseItem from './ExpenseItem'

function Expenses(props) {
  return (
    <div>
      {
        props.item.map(expense=>{
            return <ExpenseItem
              id={expense.id} 
              date={expense.date} 
              title={expense.title}
              amount={expense.amount}
              />
      })
      }
    </div>
  )
}

export default Expenses
