import {BsBoxes} from "react-icons/bs" ;
import {RiTruckLine} from "react-icons/ri" ;
import {FaServer} from "react-icons/fa" ;





export const Menus =
    [
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
    ]
