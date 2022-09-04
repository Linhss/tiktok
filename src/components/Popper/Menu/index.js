
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { wrapper as PopperWrapper } from "~/components/Popper"; 
import MenuItem from "./MenuItem"; 
import styles from './Menu.module.scss'


const cx = classNames.bind(styles)

function Menu( {children, items= [] }) {
    const renderItem = () => {
        return  items.map((item, index) => 
            <MenuItem key={index}  data={item} />)
    }
    return ( 
        <Tippy 
        delay={[0, 800]}
            interactive
            placement="bottom-end"
            render={attrs => (
                <div className={cx('Menu-list')} tabIndex="-1"{...attrs}>
                    <PopperWrapper className={cx('Menu-popper')}>
                        {renderItem()} 
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
     );
}

export default Menu;