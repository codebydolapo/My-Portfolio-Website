import styles from '../styles/navbar.module.css'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline'
import {useDispatch, useSelector} from 'react-redux'
import {menuActive, menuInactive} from './reducers/actions'

function Navbar(){

    const dispatch = useDispatch();
    const menuState = useSelector((state: any)=>state.menuState)

    function dispatchFunctions(){
        if(menuState){
            dispatch(menuInactive())
        } else if (!menuState){
            dispatch(menuActive())
        }
    }

    return(
        <div className = {styles.navbar}>
            <div className = {styles.left}>
                <img src = '/icons/bd.jpg' alt = ''/>
            </div>
            <div className = {styles.right}>
                <div className = {styles.navigationDiv} onClick = {dispatchFunctions}>
                    <p className = {styles.menu}>MENU</p>
                    {/* {menuState && <ChevronUpIcon className = {styles.menuIcon}/>}
                    {!menuState && <ChevronDownIcon className = {styles.menuIcon}/>} */}
                    <ChevronUpIcon className = {menuState ? styles.menuIconActive : styles.menuIconInactive}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar