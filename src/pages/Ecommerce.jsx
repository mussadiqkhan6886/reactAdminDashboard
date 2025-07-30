import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoDot } from 'react-icons/go';
import {Stacked, Pie, Button, SparkLine} from "../components"
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import image from "../data/5124556.jpg"

const Ecommerce = () => {

  const {activeMenu} = useStateContext()

  return (
    <div className={`mt-12 ${activeMenu ? "md:w-[90%]" : "w-full"}`}>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className={`
            bg-white dark:text-gray-700 dark:bg-secondary-dark-bg 
            h-44 rounded-xl w-full lg:w-80 p-8 pt-8 m-3 
            bg-no-repeat bg-cover bg-center
          `}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-600'>Earnings</p>
              <p className='text-2xl bg-white lg:text-xl'>$63,448.78</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button color="white" bgColor="blue" text="Download" borderRadius="10px" size={"md"}/>
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 item-center'>
          {earningData.map(item => (
            <div key={item.title} className='bg-white dark:text-gray-700 dark:bg-secondary-dark-bg md:w-45 p-4 pt-9 rounded-2xl'>
              <button type='button' style={{color: item.iconColor, backgroundColor: item.iconBg}} className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='my-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex gap-10 flex-wrap justify-center `}>
          <div className='bg-white dark:text-gray-700 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
            <div className='flex justify-between'>
              <p className='text-xl font-semibold'>Revenue Updates</p>
              <div className='flex item-center gap-4'>
                <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                  <span><GoDot className='bg-black rounded-full text-[7px]' /></span>
                  <span>Expense</span>
                </p>
                <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                  <span><GoDot className='bg-green-400 rounded-full text-[7px]' /></span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            <div className='mt-10 flex gap-10 flex-wrap justify-center'>
              <div className='border-r-1 border-gray-300 m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full bg-green-400 text-white ml-3 text-xs'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$48,438</span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine currentColor="black" id="line-sparkLine" type="Line" height="100px" width="270px" data={SparklineAreaData} color="black" />ss
              </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Ecommerce
