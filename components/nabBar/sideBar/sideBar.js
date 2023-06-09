import style from "./sideBar.module.css";
import React, { useState } from "react";
import { RiTruckLine } from "react-icons/ri";
import { BsBoxes } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { AiFillRightCircle } from "react-icons/ai";
import SubMenu from "../subMenu/SubMenu";
import  {
    List,
    ExpedicaoList
} from "./list";

export default function SideBar({
    toogle,
    changeToogle
}) {
    const [marginTop, setMarinTop] = useState("7px");
    const [toogleSubMenu, setToogleSubMenu] = useState(false);
    const [indexMenu, setIndexMenu] = useState(0);
    const [subMenuEstoque, setSubMenuEstoque] = useState([
        {
            title: "Estoque Geral",
            link: "#",
            subMenu: [],
        },
        {
            title: "Pa´s",
            link: "#",
            subMenu: [
                {
                    title: "Consulta de P.A",
                    link: "#"
                },
                {
                    title: "Gerar P.A",
                    link: "#"
                },
            ],
        },
        {
            title: "Mp´s",
            link: "#",
            subMenu: [
                {
                    title: "Consulta de M.P",
                    link: "#"
                },
                {
                    title: "Gerar M.P",
                    link: "#"
                },
            ],
        }
    ]);
    const [subMenuExpedicao, setSubMenuExpedicao] = useState([
        {
            title: "Pedidos",
            link: "#",
            subMenu: [
                {
                    title: "Consulta de Pedido",
                    link: "#"
                },
                {
                    title: "Separar Pedidos",
                    link: "#"
                },
            ],
        },
        {
            title: "Packing List",
            link: "#",
            subMenu: [
                {
                    title: "Consultar Packing´s List´s",
                    link: "#"
                },
                {
                    title: "Gerar Packing List",
                    link: "#"
                },
            ],
        }
    ]);

    const [list, setList] = useState([
        {
            className: "row_active",
            marginTop: "7px",
            text: "ESTOQUE",
            icon: <BsBoxes />,
        },
        {
            className: "row",
            marginTop: "90px",
            text: "EXPEDIÇÃO",
            icon: <RiTruckLine />
        },
        {
            className: "row",
            marginTop: "171px",
            text: "GERENCIAL",
            icon: <FaServer />
        }
    ]);

    function activeIcon(id) {
        const selection = list.map((item, index) => {
            return {
                ...item,
                className: index === id ? "row_active" : "row"
            }
        })
        setList(selection);
    }

    function verifyToogle(index) {

        if (!toogle) {
            changeToogle(true);
        }
        if (index !== indexMenu) {
            setToogleSubMenu(true)
        }else{
            setToogleSubMenu(!toogleSubMenu)
        }

        setIndexMenu(index);

    }

    return (
        <div className={`${toogle ? style.sideBar : style.sideBar_close}`} >
            <div className={style.header} >
                <AiFillRightCircle onClick={() => { changeToogle(!toogle), setToogleSubMenu(false) }} />
            </div>
            <div className={style.body} >
                <div className={style.selector} style={{ marginTop: marginTop }} />
                {list && (list.map((item, index) =>
                    <div className={style.sub_menu} key={index}>
                        {item.className == "row_active" && toogle && (
                            <SubMenu
                                list={
                                    item.text === "ESTOQUE" ? List.ESTOQUE :
                                        item.text === "EXPEDIÇÃO" ? List.EXPEDICAO : null
                                }
                                id={index}
                                marginTop={marginTop}
                                visible={toogleSubMenu}
                            />
                        )}
                        <div key={index}
                            className={`${style[item.className]}`}
                            onClick={() => {
                                verifyToogle(index)
                                activeIcon(index),
                                    setMarinTop(item.marginTop)
                            }} >
                            {item.icon}
                            <p>{item.text}</p>
                        </div>

                    </div>


                ))}
            </div>
            <div className={style.footer} > </div>

        </div>
    )
}