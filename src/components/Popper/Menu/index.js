
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { wrapper as PopperWrapper } from "~/components/Popper"; 
import MenuItem from "./MenuItem"; 
import styles from './Menu.module.scss'
import Header from "./Header";
import { useState } from "react";


const cx = classNames.bind(styles)
const defaultFn = () => {

};

function Menu( {children, items = [], onChange}) {

    const [history, setHistory] = useState([{data : items}])
    const current = history[history.length - 1 ];

    const renderItem = () => {
        return  current.data.map((item, index) => {
            const isParent = !!item.children

            return <MenuItem 
                        key={index}  
                        data={item} 
                        onClick={() => {
                            if (isParent){
                                setHistory(prev => [...prev , item.children])
                            }else {
                                onChange(item)
                            }
            }} />
        });
    }; 
    return ( 
        <Tippy 
        delay={[0, 700]}
        offset={[12, 8]}
            interactive
            placement="bottom-end"
            render={attrs => (
                <div className={cx('Menu-list')} tabIndex="-1"{...attrs}>
                    <PopperWrapper className={cx('Menu-popper')}>
                        {history.length > 1 && <Header title='Language' onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />}
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