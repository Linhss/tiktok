

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark, faSpinner,faMagnifyingGlass, faEllipsisVertical, faCircleQuestion, faKeyboard, faEarthAsia} from '@fortawesome/free-solid-svg-icons';
import { wrapper as PopperWrapper } from '~/components/Popper';


import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import Tippy from '@tippyjs/react/headless';
import Button from '~/components/Button' 
import images from '~/assets/images'; 
import AccountsItem from '~/components/AccountsItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles)  
const  MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon = {faEarthAsia} />,
        title: 'English'

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
    useEffect(() => {
        setTimeout(() => {
            setSearchResults([])
        },0)
    },[])

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
               <img src={images.logo} alt='tiktok' />
            </div>
                <Tippy 
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
                </Tippy>
            <div className={cx('actions')}>
                <Button text >Upload</Button>
                <Button primary>Log in</Button>
                <Menu items={MENU_ITEMS}>
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>           
            </div>
        </div>
    </header>
}

export default Header;
