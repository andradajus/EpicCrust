import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import React from 'react'

type ChildrenProps = {
    children: React.ReactNode
}
const HomeLayout = ({children}: ChildrenProps) => {
  return (
    <>
        <div className="grid grid-rows-[auto_1fr_auto] h-screen bg-white">
          <Navbar />
              <main>{children}</main>
          <Footer />
        </div>
    </>
  )
}

export default HomeLayout
