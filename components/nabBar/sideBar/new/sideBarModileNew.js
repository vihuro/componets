import { useState } from "react";
import style from "./sideBar.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Menus } from "../menus";

export default function SideBarMobileNew({
    changeToogle,
    toogle
}) {

    const [buttonPlus, setButtonPlus] = useState(false);
    const [listMenus, setListMenus] = useState(Menus);

    function activeIcont(id) {
        const list = listMenus.map((item, index) => ({
            ...item,
            className: id === index ? "row_active" : "row"
        }))

        setListMenus(list)
    }

    const List = () => {
        return (
            <div className={style.list} >
                {listMenus.map((item, index) => {
                    const rotate = `rotate(${(360 / Menus.length) * index}deg)`;
                    const tranlateY = item.className === "row_active" ? 'translateY(-10px)' : 'translateY(-50%)'

                    const translate = ` translateY(50%) rotate(${30 - (360 / Menus.length) * index}deg)`;
                    const secondRotate = `rotate(${(360 / Menus.length) * index}deg)  translateX(-10px)`;
                    return (
                        <li
                            onClick={() => activeIcont(index)}
                            className={style[item.className]} style={{
                                transform: `${item.className === "row_active" ? secondRotate : rotate} ${tranlateY} `,
                                transition: '1s'
                            }}>
                            <a>
                                {item.icon}
                            </a>

                        </li>
                    )

                })}

            </div>
        )
    }

    return (
        <div className={style.sideBar} >
            <div className={!buttonPlus ? style.toogle : style.toogle_active} >
                <AiOutlinePlus onClick={() => setButtonPlus(!buttonPlus)} />
                <div className={style.list} >
                    {listMenus.map((item, index) => {
                        const rotate = `rotate(${(360 / Menus.length) * index}deg)`;
                        const tranlateY = item.className === "row_active" ? 'translateY(-10px)' : 'translateY(-50%)'

                        const translate = ` translateY(50%) rotate(${30 - (360 / Menus.length) * index}deg)`;
                        const secondRotate = `rotate(${(360 / Menus.length) * index}deg)  translateX(-10px)`;
                        return (
                            <li
                                onClick={() => activeIcont(index)}
                                className={style[item.className]} style={{
                                    transform: `${item.className === "row_active" ? secondRotate : rotate} ${tranlateY} `,
                                    transition: '1s'
                                }}>
                                <a>
                                    {item.icon}
                                </a>

                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}