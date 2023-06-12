import style from "./style.module.css";
import { VscError } from 'react-icons/vsc'
import { MdOutlineVerifiedUser } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function Message({
    message = "Messagem padrão do sistema!",
    type = "error",
    visible = true
}) {


    const [typeMessage, setTypeMessage] = useState(null);
    const color = [
        {
            sucess: {
                backgroud: [15, 172, 1, 0.356],
                border: [15, 92, 5]
            }
        },
        {
            warning: {
                backgroud: [251, 255, 5, 0.445],
                border: [138, 78, 0]
            }
        },
        {
            error: {
                backgroud: [255, 5, 5, 0.445],
                border: [196, 0, 0]
            }
        }
    ]

    useEffect(() => {
        variableColor()
    }, [])

    function variableColor() {
        let variableColor =
            type === 'sucess' ?
                color[0].sucess :
                type === 'warning' ?
                    color[1].warning :
                    color[2].error

        setTypeMessage({
            '--backgroud': `rgba(${variableColor.backgroud})`,
            '--border': `rgb(${variableColor.border})`
        })
    }

    // const variable = {

    //     '--backgroud': `rgba(${ typeMessage.backgroud
    //     })`,
    //     '--border': `rgb(${ typeMessage.border })`
    // }

    return (
        typeMessage && (
            <div className={style.container} style={typeMessage}>
                <div className={style.icon} style={typeMessage}>
                    {type === 'sucess' ?
                        <MdOutlineVerifiedUser /> :
                        type === 'warning' ?
                            <BiError /> :
                            <VscError />
                    }

                </div>
                <div className={style.message} >
                    <p>
                        {message}
                    </p>
                </div>

            </div>
        )

    )

}