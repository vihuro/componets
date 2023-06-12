"use client";
import styles from './page.module.css'
import Input from "../../components/input/inputLabe/Input";
import NavBar from "../../components/nabBar/NavBar";
import React, { useState, useEffect } from 'react';
import Card from '../../components/card/CardUI/CardWithLine';
import "./globals.css";
import { BsBoxes } from "react-icons/bs"
import { RiTruckLine } from "react-icons/ri"
import { FaServer } from "react-icons/fa"
import CardMessage from '../../components/message/card/CardMessage';
import Message from '../../components/message/material/Message';

export default function Home() {

  const [toogleMenu, setToogleMenu] = useState(false);

  const [toogleMessage, setToogleMessage] = useState(true);

  const [marginTop, setMarinTop] = useState("-6px");

  const [list, setList] = useState([
    {
      className: "row_active",
      marginTop: "-6px",
      text: "ESTOQUE",
      icon: <BsBoxes />,
    },
    {
      className: "row",
      marginTop: "40px",
      text: "EXPEDIÇÃO",
      icon: <RiTruckLine />
    },
    {
      className: "row",
      marginTop: "80px",
      text: "GERENCIAL",
      icon: <FaServer />
    }
  ]);

  function activeIcon(id) {
    const selectList = list.map((item, index) => ({

      className: index === id ? "row_active" : "row",
      icon: item.icon,
      marginTop: item.marginTop,
      text: item.text
    }
    ))

    setList(selectList);
  }

  return (
    <main className={styles.main}>
      <NavBar
        changeToogle={setToogleMenu}
        toogle={toogleMenu}
      />
      <div className={styles.container_message} >
        <div className={styles.message} >
          <Message
            type='error'
          />
        </div>
        <div className={styles.message} >
          <Message
            type='warning'
          />
        </div>
        <div className={styles.message} >
          <Message
            type='sucess'
          />
        </div>
      </div>


      <div className={styles.teste_input} >
        <Input
          placeHolder={'INPUT'}

        />

      </div>


      {/* <CardMessage
        visible={toogleMessage}
      /> */}
      <button
        onClick={() => setToogleMessage(!toogleMessage)}
        style={{
          top: 300,
          position: 'relative'
        }} >
        Aqui
      </button>
      {/* <div className={styles.topBar} >

      </div>
      <div className={`${toogleMenu ? styles.sideBar : styles.sideBar_close}`} >
        <div className={styles.header} ></div>
        <div className={styles.body} >
          <div className={styles.selector} style={{ marginTop: marginTop }} >

          </div>
          {list.map((item, index) =>
            <div key={index} onClick={() => {
              activeIcon(index),
                setMarinTop(item.marginTop)
            }} >
              <div className={`${styles[item.className]}`} >
                {item.icon}
                <p>{item.text}</p>
              </div>
            </div>)} */}



      {/* <div className={styles.row_active} >
            <BsBoxes />
            <p>ESTOQUE</p>
          </div>
          <div className={styles.row} >
            <RiTruckLine />
          </div> */}

      {/* </div>
        <div className={styles.footer} ></div>

      </div> */}
    </main>
  )
}
