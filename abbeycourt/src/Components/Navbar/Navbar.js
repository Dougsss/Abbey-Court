import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Navbar(){
    return(
        <>
            <div className="">
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars />
                </Link>
            </div>
        </>
    );
}