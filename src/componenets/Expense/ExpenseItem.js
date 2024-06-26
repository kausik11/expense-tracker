import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

export default function ExpenseItem(props) {

  // let title = "Car isurence"
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  )
}
