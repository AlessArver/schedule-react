import React, { FC, useEffect, useState } from 'react'
import moment from 'moment'
import arrowLeft from '../../../assets/icons/arrowLeft.svg'

type PropsType = {
  onPageChanged: (p: Date) => void
}

const Paginator: FC<PropsType> = ({onPageChanged}) => {
  const [currentPage, setCurrentPage] = useState<any>(new Date)

  useEffect(() => setCurrentPage(currentPage), [currentPage])

  const leftPortionPageNumber = () => {
    setCurrentPage(moment(currentPage, 'MMM Do YY').subtract(1, 'days'))
    console.log(currentPage)
    onPageChanged(currentPage)
  }
  const rightPortionPageNumber = () => {
    setCurrentPage(moment(currentPage, 'MMM Do YY').add(1, 'days'))
    console.log(currentPage)
    onPageChanged(currentPage)
  }
  return (
    <div className='d-flex justify-content-between mb-4'>
      <button onClick={leftPortionPageNumber} className='btn btn-primary'>
        <img src={arrowLeft}/>
      </button>
      <div className='title'>{moment(currentPage).format('MMM Do YY') || currentPage}</div>
      <button onClick={rightPortionPageNumber} className='btn btn-primary'>
        <img src={arrowLeft}/>
      </button>
    </div>
  )
}
export default React.memo(Paginator)