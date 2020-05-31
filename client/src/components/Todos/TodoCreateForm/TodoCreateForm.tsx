// @ts-ignore
import React, { FC } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { maxLength, required } from '../../../utils/validators'
import { createField, Input } from '../../common/Forms/Forms'
import s from './TodoCreateForm.module.css'
import { TodoFormType, TodoFormTypeKeys } from '../../../types/todo'

const maxLengthField = maxLength(100)

const TodoCreateForm: FC<InjectedFormProps<TodoFormType>> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit} className='form'>
    {createField<TodoFormTypeKeys>('text', 'What you\'ll to do?',
      [required, maxLengthField], Input)}
    <button>Submit</button>
  </form>
)

const TodoCreateReduxForm = reduxForm<TodoFormType>({form: 'todoForm'})(TodoCreateForm)
export default TodoCreateReduxForm