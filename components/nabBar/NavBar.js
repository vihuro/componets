import TopBar from "./topBar/TopBar";
import React, { useEffect, useState } from "react";
import SideBarDesktop from "./sideBar/sideBar";
import SideBarMobile from "./sideBar/SideBarMobile";



const NabBar = ({
    toogle,
    changeToogle }) => {

    const [windowSize, setWindowSize] = useState(null);

    // useEffect(() => {
    //     setWindowSize(window.screen.width);

    //     if (window.innerWidth) {
    //         const handleResize = () => {
    //             const size = window.innerWidth;
    //             if (size) {
    //                 setWindowSize(size);
    //                 console.log(size)
    //             }
    //         };

    //         window.addEventListener('resize',handleResize);


    //     }

    // }, []);

    useEffect(() => {


        setWindowSize(window.screen.width);

        const handleResize = () => {
            const size = window.innerHeight;
            setWindowSize(size);

        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })


    return (
        <React.Fragment>
            <TopBar />
            <SideBarDesktop
                changeToogle={changeToogle}
                toogle={toogle}
            />

            {/* <SideBarMobile
                        changeToogle={changeToogle}
                        toogle={toogle}

                    /> */}
            {/* <SideBarMobileNew
                changeToogle={changeToogle}
                toogle={toogle}
            /> */}
        </React.Fragment>

    )

}

export default NabBar
