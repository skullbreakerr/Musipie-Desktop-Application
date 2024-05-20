import React from 'react'

export const Button = ({children,active,...props}) => {
  return (
    <li className={`${active}`} ><p><button {...props} >{children}</button></p></li>
  )
}
