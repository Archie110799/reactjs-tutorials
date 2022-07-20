import React from "react";
import img from "../images/basic-images/2.jpg";
import styles from "./basic2.module.css";
import { AiFillStar } from "react-icons/ai";
import "./styles.css";

const MAX_STAR = 5

export default function Basic2_S2() {
  const product = [{
    image: img,
    shop: "YOUNG SHOP",
    name: "Samsung UHD TV 24inch",
    star: MAX_STAR,
    money: 599,
  },]
  
  const renderStar = (star) => {
    let content = [];

    for (let index = 0; index < star; index++) {
      content.push(<AiFillStar/>);
      // content.push(<i className="bi bi-star-fill"></i>);
    }

    for (let index = star; index < MAX_STAR; index++) {
      content.push(<i className="bi bi-star"></i>);
    }

    content.push(<span>&nbsp; {star}</span>);

    return content;
  };
  return (
    <div className={styles.div_card}>
      <div className={styles.div_image}>
        {/* <img src='/images/Rose-Elle01.jpeg' alt={product.name}></img> */}
        <img src={product.image} alt={product.name}></img>
      </div>
      <div className={styles.div_content}>
        <p style={{ fontWeight: 700 }}>{product.shop}</p>
        <hr></hr>
        <p className={styles.content_title}>{product.name}</p>
        <div className="star">{renderStar(product.star)}</div>
        <p>{product.money ? `$${product.money}` : ""}</p>
      </div>
    </div>
  );
}
