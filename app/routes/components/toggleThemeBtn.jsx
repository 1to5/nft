import {RiMoonLine} from 'react-icons/ri';
import {RiSunLine} from 'react-icons/ri';

export default function ToggleButton({toggleTheme}) {
    return(
        <div className=' 2xl:p-0 lg:p-6 w-16 h-auto'>
            <div 
            className='' 
            
            onClick={toggleTheme}>
                <RiSunLine 
                className='transition hover:-translate-y-1 hover:scale-110 delay-150 h-8 w-8 fill-gray-300 hover:fill-gray-800 duration-300 dark:fill-gray-50 dark:hover:fill-gray-300 ease-in-out' />
            </div>
        </div>
    )
}