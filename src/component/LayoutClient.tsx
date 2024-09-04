import React from 'react'
import Header from './Header'
import { Footer } from './Footer'
type Props = {
    children: React.ReactNode
}

export const LayoutClient = ({children} : Props) => {
  return (
    <div className='wrapper bg-white '>
        <Header/>
    {children}

    <Footer/>
    </div>
  )
}
