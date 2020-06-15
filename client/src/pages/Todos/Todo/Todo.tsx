import React, { FC, useEffect, useState } from 'react'
import './Todo.sass'
import Preloader from '../../../components/Preloader/Preloder'
import x from '../../../assets/icons/x.svg'
import check2 from '../../../assets/icons/check2.svg'
import cn from 'classnames'
import TodoUpdateReduxForm from './TodoUpdateForm'
import * as t from '../../../types/todo'
import socket from '../../../socket'
import { TodoType } from '../../../types'
import { Button, Card } from '../../../components'

const Todo: FC<t.TodoProps> = ({todo, ...props}) => {
  useEffect(() => {
    socket.on('update_todo_text', (data: TodoType) => {
      props.updateTodoTextSuccess(data._id, data.text)

      return () => socket.off('update_todo_text')
    })
  }, [todo.text])

  let [textEdit, textSetEdit] = useState(false)

  const onTextSubmit = (formData: t.form) => {
    textSetEdit(false)
    props.updateTodoText(formData._id, formData.text)
  }

  const textActivateEdit = () => textSetEdit(true)

  return props.itemsIsLoading.some(_id => _id === todo._id) && <Preloader/>
         ||
         <Card className='todo-card mb-4'>
           <div className='card-header d-flex justify-content-end'>
             <Button onClick={() => props.deleteTodo(todo._id)}
                     className='btn-danger btn-sm'>
               <img src={x}/>
             </Button>
           </div>
           <div className='card-body'>
             {!textEdit
               ? <div className='d-flex justify-content-between'>
                 <p onDoubleClick={textActivateEdit} className='todo_text'>{todo.text}</p>
                 {todo.isCompleted
                   ? <button className='btn btn-sm btn-light'>
                     <img src={check2}/>
                   </button>
                   : <div>
                     <input type='checkbox' className='form-check-input'/>
                   </div>}
               </div>
               : <TodoUpdateReduxForm initialValues={todo} onSubmit={onTextSubmit}/>
             }
           </div>
         </Card>
}
export default Todo