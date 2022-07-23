import styles from "../styles/menubar.module.css";
import {
  HomeIcon,
  EmojiHappyIcon,
  BriefcaseIcon,
  ChatIcon,
  CogIcon
} from "@heroicons/react/outline";
import Link from "next/link";
import {useSelector, useDispatch} from 'react-redux'
import {menuActive, menuInactive} from './reducers/actions'


function MenuBar() {

  const menuState = useSelector((state: any)=>state.menuState)
  const dispatch = useDispatch();

  function dispatchFunctions(){
        if(menuState){
            dispatch(menuInactive())
        } else if (!menuState){
            dispatch(menuActive())
        }
    }


  return (
    <div className={menuState ? styles.menubarActive: styles.menubarInactive}>
      <Link href="/#landing">
        <div className={styles.menuDiv} onClick= {dispatchFunctions}>
          <HomeIcon className={styles.menuDivIcon} />
          <p className={styles.menuDivText}>Home</p>
        </div>
      </Link>
      <Link href="/#intro">
        <div className={styles.menuDiv} onClick= {dispatchFunctions}>
          <EmojiHappyIcon className={styles.menuDivIcon} />
          <p className={styles.menuDivText}>About</p>
        </div>
      </Link>
      <Link href="/#portfolio">
        <div className={styles.menuDiv} onClick= {dispatchFunctions}>
          <BriefcaseIcon className={styles.menuDivIcon} />
          <p className={styles.menuDivText}>Portfolio</p>
        </div>
      </Link>
      <Link href="/#skills">
        <div className={styles.menuDiv} onClick= {dispatchFunctions}>
          <CogIcon className={styles.menuDivIcon} />
          <p className={styles.menuDivText}>Skills</p>
        </div>
      </Link>
      {/* <Link href="">
        <div className={styles.menuDiv}>
          <SpeakerphoneIcon className={styles.menuDivIcon} />
          <p className={styles.menuDivText}>Testimonials</p>
        </div>
      </Link> */}
      <Link href="/#contact">
        <div className={styles.menuDiv} onClick= {dispatchFunctions}>
          <ChatIcon className={styles.menuDivIcon} />
          <p className={styles.menuDivText}>Contact</p>
        </div>
      </Link>
    </div>
  );
}

export default MenuBar;
