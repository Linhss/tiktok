

import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '~/assets/images'; 
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark, faSpinner,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountsItem';

const cx = classNames.bind(styles)  

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
            </div>
        </div>
    </header>
}

export default Header;
