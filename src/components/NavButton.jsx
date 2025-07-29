import { TooltipComponent } from "@syncfusion/ej2-react-popups"

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
    
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{color}} className='relative text-xl cursor-pointer rounded-full p-3 hover:bg-gray-100'>
      <span style={{background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>
      </span>
       {icon}
    </button>
  </TooltipComponent>
)

export default NavButton