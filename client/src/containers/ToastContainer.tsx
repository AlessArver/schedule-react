import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Toast } from '../components'
import { RootState } from '../flux'
import { ToastState } from '../flux/reducers/toast'

const ToastContainer: FC<ToastState> = ({isToast, toastType, text}) =>
  <Toast isToast={isToast} toastType={toastType} text={text}/>

const mapStateToProps = (state: RootState): ToastState => ({
  isToast: state.toast.isToast,
  toastType: state.toast.toastType,
  text: state.toast.text
})
export default connect(mapStateToProps)(ToastContainer)