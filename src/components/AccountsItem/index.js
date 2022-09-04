
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind'
import styles from './AccountsItem.module.scss'


const cx = classNames.bind(styles)   
function AccountsItem() {
    return ( 
        <div className={cx('Wrapper')}>
            <img className={cx('Avatar')} src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/af7bb09c3954dc33a2510db4f0781444.jpeg?x-expires=1662436800&x-signature=%2BhU4ae2FQ6e4d1EKDl8LBUfvY7M%3D" alt=" hoa" />
            <div className={cx('Info')}>
                <h4 className={cx('Name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('Check')} ></FontAwesomeIcon>
                </h4>
                <span className={cx('Username')}>nguyenVana</span>
            </div>
        </div>
     );
}

export default AccountsItem;