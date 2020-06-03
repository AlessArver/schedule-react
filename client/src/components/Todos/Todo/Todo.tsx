import React, { FC, useState } from 'react'
import s from './Todo.module.css'
import Preloader from '../../common/Preloader/Preloder'
import cn from 'classnames'
import TodoUpdateReduxForm from './TodoUpdateForm'
import * as t from '../../../types/todo'

const Todo: FC<t.ownProps> = ({todo, ...props}) => {
  let [textEdit, textSetEdit] = useState(false)

  const onTextSubmit = (formData: t.form) => {
    textSetEdit(false)
    props.updateTodoText(formData._id, formData.text)
  }

  const textActivateEdit = () => textSetEdit(true)

  return props.todosIsLoading.some(_id => _id === todo._id) && <Preloader/>
         // className={cn(s.card, 'card')}
         || <div className='card'>
           <div className='cardHeader'>
             <button className={s.delete} onClick={() => props.deleteTodo(todo._id)}>x</button>
           </div>
           {/*className={cn(s.cardContent, 'cardContent')}*/}
           <div className='cardContent'>
             {!textEdit
               ? <p onDoubleClick={textActivateEdit}>{todo.text}</p>
               : <TodoUpdateReduxForm initialValues={todo} onSubmit={onTextSubmit}/>
             }
             <button className={s.isCompleted}>
               {todo.isCompleted ? 'y' : 'n'}
             </button>
           </div>
         </div>
}
export default Todo