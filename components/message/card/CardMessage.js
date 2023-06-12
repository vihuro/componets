import { useEffect, useState } from "react";
import style from "./style.module.css";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { VscError } from 'react-icons/vsc'

export default function CardMessage({
    text = "Message não identificada",
    type = "error",
    visible = true
}) {

    const [colorMessage, setColorMessage] = useState(null);

    const colors = [
        {
            sucess: [13, 226, 137]
        },
        {
            warning: [250, 133, 0]
        },
        {
            error: [250, 0, 0]
        }
    ]

    useEffect(() => {

        switch (type) {
            case 'sucess': {
                setColorMessage(`rgb(${colors[0].sucess})`);
                break;
            }
            case 'warning': {
                setColorMessage(`rgb(${colors[1].warning})`);
                break;
            }
            default: {
                setColorMessage(`rgb(${colors[2].error})`)
            }
        }
    }, [])

    const cardStyle = {
        '--card-color': `${colorMessage}`
    };
    const cardClass = visible ? `${style.card} ` : `${style.card_close} `

    const Icon = () => {
        return (
            type === 'sucess' ?
                <MdOutlineVerifiedUser color={colorMessage} /> :
                type === 'warning' ?
                    <BiError color={colorMessage} /> :
                    <VscError color={colorMessage} />
        )

    }




    return (
        <div className={style.body} >
            <div className={visible ? style.card : style.card_close} style={cardStyle}>
                <div className={style.icon}  >
                    <Icon />
                </div>
                <p>
                    {text}
                </p>

            </div>
        </div>
    )

}