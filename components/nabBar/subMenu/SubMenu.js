import style from "./style.module.css";
import React, { useState } from "react";
import { AiFillRightCircle } from "react-icons/ai";

export default function SubMenu({
    list,
    visible,
    id,
    marginTop
}) {


    const [selection, setSelection] = useState(id);


    return (
        visible && (
            <div className={style.menu} style={{ marginTop: 35 }} >
                {list && (
                    list.map((item, index) =>
                        <ul key={index} onClick={() => setSelection(index)} >
                            {item.title}

                            {item.subMenu.length > 0 && (
                                <>
                                    <AiFillRightCircle key={index} />
                                    {selection === index && (
                                        <div className={style.subMenu} >
                                            {item.subMenu.map((item, index) =>
                                                <li key={index} >{item.title}</li>
                                            )}
                                        </div>

                                    )}
                                </>

                            )}

                        </ul>

                    )
                )}
            </div >
        )
    )

}