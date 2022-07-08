import React from "react";
import './style.css';
import styles from './basic1.module.css';
import img from '../images/basic-images/1.jpg'

export default function Basic1_S2() {
  const shirt = {
    image: img,
    name: "Clothing & Apparel",
    info1: "Accessories",
    info2: "Bags",
    info3: "Kid's Fashion",
    info4: "Mens",
  };
  return (
    <div className={styles.card_zone}>
      <div className={styles.div_image}>
        <img src={shirt.image} alt={shirt.name}></img>
      </div>
      <div className={styles.div_info}>
        <span className={styles.info_title}>{shirt.name}</span>
        <span>{shirt.info1}</span>
        <span>{shirt.info2}</span>
        <span>{shirt.info3}</span>
        <span>{shirt.info4}</span>
      </div>
    </div>
  );
}
