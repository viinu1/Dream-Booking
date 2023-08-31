import React from 'react'
import classNames from 'classnames/bind'

import styles from './Dialog.module.scss'

const cx = classNames.bind(styles)


export default function Dialog({message,onDialog}) {
  return (
    <div className={cx('dialog')}>
        <div className={cx('dialog__content')}>
            <h3>{message}</h3>
            <div className='d-flex align-items-center'>
                <button onClick={()=>onDialog(true)} style={{color:'white',padding:'8px',cursor:'pointer',background:'red',border:'none'}} className='me-2'>Yes</button>
                <button onClick={()=>onDialog(false)} style={{color:'white',padding:'8px',cursor:'pointer',background:'green',border:'none'}}>No</button>
                
            </div>
        </div>
    </div>
  )
}
