import { useState } from "react";
import style from "./SideBarMobile.module.css";
import { List } from "./list";
import { Menus } from "./menus";
import { AiOutlinePlus } from "react-icons/ai";
import Menu from "@/app/menu/page";

export default function SideBarMobile({
    changeToogle,
    toogle
}) {

    const [buttonPlus, setButtonPlus] = useState(false);
    const [listMenus, setListMenus] = useState(Menus);

    const [masterTranslate, setMasterTranslate] = useState();

    function updateIndicatorPosition(id) {
        const angle = (360 / Menus.length) * id;
        const translateX = 0 * id;
        const indicatorStyle = {
            transform: `rotate(${angle}deg) `,
        };
        setMasterTranslate(indicatorStyle);
    }


    const List = ({

    }) => {
        return (
            <div>
                {listMenus.map((item, index) => {
                    const rotate = `rotate(${(360 / Menus.length) * index}deg)`;
                    const tranlateY = item.className === "row_active" ? 'translateY(-10px)' : 'translateY(-50%)'

                    const translate = ` translateY(50%) rotate(${45 - (360 / Menus.length) * index}deg)`;
                    const secondRotate = `rotate(${(360 / Menus.length) * index}deg)  translateX(-20px)`;


                    return (
                        <div >
                            <li key={index}
                                className={style[item.className]}
                                onClick={(e) => { e.stopPropagation(); activeIcon(index); }}
                                style={{
                                    transform: `${item.className === "row_active" ? secondRotate : rotate} ${tranlateY} `,
                                    transition: '1s'
                                }}>
                                <a href='#'
                                    style={{
                                        transform: translate,
                                        transition: '1s'
                                    }}>
                                    {item.icon}
                                </a>
                            </li>
                        </div>
                    )
                })}
                <div className={style.indicator} style={{...masterTranslate, transition:'1s all'}} />
            </div>
        )
    }

    function activeIcon(id) {
        const list = listMenus.map((item, index) => {
            return {
                ...item,
                className: index === id ? 'row_active' : 'row'
            }
        })

        setListMenus(list);
        updateIndicatorPosition(id);

    }
    const [value, setValue] = useState(false);

    return (
        <div className={style.sideBar} >
            <div onClick={() => setButtonPlus(!buttonPlus)} className={`${!buttonPlus ? style['toogle'] : style['active']}`} >
                <AiOutlinePlus onClick={() => setButtonPlus(!buttonPlus)} />
                <List />
            </div>
        </div>
    )
}