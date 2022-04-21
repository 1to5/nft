import {RiMoonLine} from 'react-icons/ri';
import {RiSunLine} from 'react-icons/ri';

export default function ToggleButton({toggleTheme}) {
    return(
        <div className=' w-16 h-auto'>
            <div className='' onClick={toggleTheme}>
                <RiSunLine className='h-8 w-8 fill-gray-600 hover:fill-gray-800 ease-in' />
            </div>
        </div>
    )
}