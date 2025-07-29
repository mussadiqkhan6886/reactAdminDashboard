import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from "../data/avatar.jpg"
import Chat from './Chat'
import {Notifications} from '.'
import {Cart} from '.'
import {UserProfile} from '.'
import NavButton from './NavButton'

import { useStateContext } from '../contexts/ContextProvider'

const NavBar = () => {

  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick,screenSize, setScreenSize} = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)

  }, [])

  useEffect(() => {
    if(screenSize<=900){
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title={"Menu"} customFunc={() => setActiveMenu(prev => !prev)} color={"blue"} icon={<AiOutlineMenu />} />

      <div className='flex'>
        <NavButton title={"Cart"} customFunc={() => handleClick('cart')} color={'blue'} icon={<FiShoppingCart />} />
        <NavButton title={"Chat"} dotColor='#03C9D7' customFunc={() => handleClick('chat')} color={'blue'} icon={<BsChatLeft />} />
        <NavButton title={"Notification"} dotColor='#03C9D7' customFunc={() => handleClick('notification')} color={'blue'} icon={<RiNotification3Line />} />
        <TooltipComponent content={"Profile"} position='BottomCenter'>
          <div className='flex item-center gap-2 cursor-pointer p-1 hover:bg-gray-100 rounded-lg' onClick={() => handleClick("userProfile")}>
            <img src={avatar} className='rounded-full w-8 h-8' alt="user profile picture" />
            <p>
              <span className='text-gray-400 text-14'>
                Hi, 
              </span> {' '}
              <span className='text-gray-400 font-bold m;-1 text-14'>Mussadiq</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14 ' />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notifications />}
        {isClicked.userProfile && <UserProfile />}

      </div>

    </div>
  )
}

export default NavBar
