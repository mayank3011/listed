import {Link, useLocation,useNavigate} from 'react-router-dom'
import classNames from 'classnames'

import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation'
import toast from 'react-hot-toast';

const linkClasses =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
    


const Sidebar = () => {
    const navigate = useNavigate();
  const signout = () => {
    localStorage.removeItem("user");
    toast('Come Back Soon !', {
      icon: '😊',
    });
    navigate('/');
  }
  return (
    <div className='flex flex-col bg-black w-60 h-[944px] p-3 mt-12 ml-12 rounded-[30px] text-white'>
        <div className='mt-7 ml-7 text-4xl font-bold'>Board.</div>
        <div className='flex-1 py-8 pl-8 flex flex-col gap-4'>{DASHBOARD_SIDEBAR_LINKS.map((item)=>(
            <SidebarLink key={item.key} item={item}/>
        ))}
        </div>
        <div className='py-8 pl-8 flex flex-col gap-4'>
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item=>(
                <SidebarLink key={item.key} item={item}/>
            ))}
        </div>
    </div>
    
  )
}
function SidebarLink({item}){
    const {pathname}=useLocation()
    return(
        <Link to={item.path} className={classNames(pathname===item.path?' text-white':'text-neutral-400 text-bold',linkClasses)}>
        <span className='text-xl'>{item.icon}</span>
        {item.label}
        </Link>
        
    )
}

export default Sidebar
