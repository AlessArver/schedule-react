import React, { FC } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { maxLength, required } from '../../../utils/validators'
import { createField, Input } from '../../common/Forms/Forms'
import './TodoCreateForm.sass'
import * as t from '../../../types/todo'
import { Button } from '../../../components'

const maxLengthField = maxLength(100)

const TodoCreateForm: FC<InjectedFormProps<t.form>> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit} className='form mt-5'>
    {createField<t.formKeys>('text', 'Что ты будешь делать?',
      [required, maxLengthField], Input, {})}
    <Button>Создать</Button>
  </form>
)

export default reduxForm<t.form>({form: 'todoForm'})(TodoCreateForm)