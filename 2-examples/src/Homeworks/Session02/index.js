import React from 'react';
import Block4 from './Block4';
import Block3 from './Block3';
import ChartBar from './ChartBar';

import ChartBar2 from './ChartBar2';
import Basic2_S2 from './Basic2';
import Basic1_S2 from './Basic1';

function Session02() {
  return (
    <div>
      <Basic1_S2 />

      <hr />
      <Basic2_S2 />

      <hr />
      <ChartBar text='BANDWIDTH' color1='#E44D4C' color2='#F75354' percentage={50} />
      <ChartBar text='STORAGE' color1='#2DB8CD' color2='#2DB8CD' percentage={50} />
      <ChartBar text='USERS' color1='#4AC25E' color2='#51D567' percentage={70} />
      <ChartBar text='VISITORS' color1='#E9C318' color2='#FCD518' percentage={30} />

      <hr />
      <ChartBar2 text='a' color='red' iconName='bi bi-star' percentage={70}/>

      {/* <hr />
      <Block3 text='Facebook' total={24599} iconName='FaFacebookF' /> */}

      <hr />
      <div style={{display:'flex'}}>
        <Block4 text={`TODAY'S VISITORS`} total={24599} unit='' percentageItems={[40, 35, 60, 75, 40]} />
        <Block4 text={`TODAY'S VISITORS`} total={24599} unit='' percentageItems={[20, 35, 64, 100, 90]} />
      </div>
    </div>
  );
}

export default Session02;
