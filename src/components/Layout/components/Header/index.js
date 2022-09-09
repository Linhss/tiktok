

import {useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { wrapper as PopperWrapper } from '~/components/Popper';
import {faCircleXmark, 
        faSpinner,
        faMagnifyingGlass, 
        faEllipsisVertical, 
        faCircleQuestion, 
        faKeyboard, 
        faEarthAsia, 
        faCloudUpload,
        faUser,
        faCoins,
        faGear,
        faSignOut, 
} from '@fortawesome/free-solid-svg-icons';


import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import Button from '~/components/Button' 
import images from '~/assets/images'; 
import AccountsItem from '~/components/AccountsItem';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';



const cx = classNames.bind(styles)  
 
const  MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon = {faEarthAsia} />,
        title: 'English' ,
        children : {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {   type:'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                
            ]
        } 

    },
    {
        icon: <FontAwesomeIcon icon = {faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback'
        
    },
    {
        icon: <FontAwesomeIcon icon = {faKeyboard} />,
        title: 'Keyboard shortcuts',
        
    }
];


function Header() {
    const [searchResults, setSearchResults] = useState([])

    const currentUser = true

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([])
        },0)
    },[])

    // heandle logic 
    const HeandleMenuChange = (MenuItem) => {
        switch (MenuItem.type){
            case 'Language':
            break;
            default :
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon = {faUser} />,
            title: 'View profile',
            to: '/@hoa'
            
        },
        {
            icon: <FontAwesomeIcon icon = {faCoins} />,
            title: 'Get coins',
            to: '/Coins'
            
        },
        {
            icon: <FontAwesomeIcon icon = {faGear} />,
            title: 'Settings',
            to: '/Settings'
            
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon = {faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate:true,
        },
    ] 

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
               <img src={images.logo} alt='tiktok' />
            </div>
                <HeadlessTippy 
                    interactive
                    visible = {searchResults.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1"{...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountsItem />
                                    <AccountsItem />
                                    <AccountsItem />
                                    <AccountsItem />
                                    <AccountsItem />
                                </PopperWrapper>
                            </div>
                    )}
                    >
                        <div className={cx('search')}>
                            <input type="text" placeholder='Search accounts add videos' spellCheck={false} />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                       <Tippy
                                delay={[0,200]}  
                                content="Upload-videos" 
                                placement='bottom'>
                            <button className={cx('actions-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button>
                       </Tippy>
                        </>                    
                    ): (
                        <>
                        <Button text >Upload</Button>
                        <Button primary>Log in</Button>
                        </>           
                    )}
                     <Menu items={currentUser ? userMenu : MENU_ITEMS } onChange={HeandleMenuChange}>
                        {currentUser ? (
                            <img src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/79e0c4958404d4e61d328e8e874e5098~c5_100x100.jpeg?x-expires=1662883200&x-signature=u7L9udT6G42N9rDbFTVLq%2FKDu6c%3D' 
                            className={cx('user-Avatar')} 
                            alt = "" />
                        ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                        )}
                    </Menu>
                </div>
        </div>
    </header>
}

export default Header;
