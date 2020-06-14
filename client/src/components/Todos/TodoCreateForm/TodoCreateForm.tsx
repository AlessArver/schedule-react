import React, { FC } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { maxLength, required } from '../../../utils/validators'
import { createField, Input } from '../../common/Forms/Forms'
import s from './TodoCreateForm.module.css'
import * as t from '../../../types/todo'

const maxLengthField = maxLength(100)

const TodoCreateForm: FC<InjectedFormProps<t.form>> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit} className='form'>
    {createField<t.formKeys>('text', 'What you\'ll to do?',
      [required, maxLengthField], Input, {})}
    <button className='btn btn-secondary'>Create</button>
  </form>
)

export default  reduxForm<t.form>({form: 'todoForm'})(TodoCreateForm)