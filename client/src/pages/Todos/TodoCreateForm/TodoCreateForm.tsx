import React, { FC } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { maxLength, required } from '../../../utils/validators'
import { createField, Input } from '../../common/Forms/Forms'
import './TodoCreateForm.sass'
import * as t from '../../../types/todo'
import { Button } from '../../../components'
import { useTranslation } from 'react-i18next'

const maxLengthField = maxLength(100)

const TodoCreateForm: FC<InjectedFormProps<t.form>> = ({handleSubmit}) => {
  const {t, i18n} = useTranslation()

  return <form onSubmit={handleSubmit} className='form mt-5'>
    {createField<t.formKeys>('text', t('todo.create_todo_form.input'),
      [required, maxLengthField], Input, {})}
    <Button>{t('todo.create_todo_form.button')}</Button>
  </form>
}

export default reduxForm<t.form>({form: 'todoForm'})(TodoCreateForm)