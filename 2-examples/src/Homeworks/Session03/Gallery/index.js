// import React from 'react';
// import styles from './gallery.module.css';

// const maxImageCount = 4;

// function Gallery() {
//   const [index, setIndex] = React.useState(1);

//   let imagePath = `/images/${index}.jpeg`;

//   return (
//     <div className="my-3 mx-auto w-50">
//       <img className={styles.image_big} src={imagePath} alt='' />
//       <div className={styles.button_container}>
//         <button
//           disabled={index === 1}
//           style={{ backgroundColor: index === 1 ? 'gray' : null }}
//           className={styles.button_navigation}
//           onClick={() => {
//             setIndex(index - 1);
//           }}
//         >
//           Previous
//         </button>
//         <div className={styles.text}>
//           {index} / {maxImageCount}
//         </div>
//         <button
//           disabled={index === maxImageCount}
//           style={{ backgroundColor: index === maxImageCount ? 'gray' : null }}
//           className={styles.button_navigation}
//           onClick={() => {
//             setIndex(index + 1);
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Gallery;


import React, { Component } from 'react'

const img = [1,2,3,4];
export default class index extends Component {
  constructor(props){
    super(props)

    this.state= {
      indexImage : 0
    }
  }
  render() {
    return (
      <>
        <button onClick={()=>this.setState({indexImage : this.indexImage-- })}> set index = 1</button>
        <div>{img[this.indexImage]}</div>
      </>
    )
  }
}
