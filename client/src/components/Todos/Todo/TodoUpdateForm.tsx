import React, { FC } from 'react'
import { maxLength, required } from '../../../utils/validators'
import { createField, Input } from '../../common/Forms/Forms'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { TodoFormType, TodoFormTypeKeys } from '../../../types/todo'

const maxLengthTodo = maxLength(100)

const TodoUpdateForm: FC<InjectedFormProps<TodoFormType>> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    {createField<TodoFormTypeKeys>(
      'text', 'What you\'ll to do?',
      [required, maxLengthTodo], Input,
      {autoFocus: true, onBlur: handleSubmit})}
    <button>aaaaa</button>
  </form>
)

const TodoUpdateReduxForm = reduxForm<TodoFormType>({form: 'todoUpdateForm'})(TodoUpdateForm)
export default TodoUpdateReduxForm