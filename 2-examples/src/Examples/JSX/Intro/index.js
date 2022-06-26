import React from "react";
import './intro.css';

const TEXT__INTRO =
  "Park Chae-young (tiếng Hàn: 박채영; tên tiếng Anh: Roseanne Park, sinh ngày 11 tháng 2 năm 1997), thường được biết đến với nghệ danh Rosé (Hangul: 로제)[2] là nữ ca sĩ người New Zealand gốc Hàn Quốc, thành viên của nhóm nhạc nữ Blackpink do YG Entertainment thành lập và quản lý. Sinh ra ở New Zealand và lớn lên ở Úc, Rosé chính thức ký hợp đồng với công ty YG Entertainment của Hàn Quốc sau một buổi thử giọng vào năm 2012 và sau đó trở thành thực tập sinh tại đây trong vòng 4 năm. Cô ra mắt với tư cách là giọng ca chính của Blackpink vào tháng 8 năm 2016. Tháng 3 năm 2021, cô phát hành album đĩa đơn solo đầu tay mang tên R.";

const cardStyle = {
  width: "50%",
  margin: "3% auto",
};

const user = {
    firstName: "Park",
    lastName: "Chae-young",
    nickName: "Rosé",
    avatarUrl:'/images/Rose-Elle01.jpeg',
    profile: "https://www.instagram.com/roses_are_rosie/",
  };

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function Intro() {
  let gotoProfile = (
    <a href={user.profile} className="btn btn-primary">
      More... {user.nickName}
    </a>
  );
  let introduction = React.createElement(
    "p",
    { className: "card-text modify__color"},
    TEXT__INTRO
  );
  return (
    <>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={user.avatarUrl}
          alt={formatName(user)}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{formatName(user)}</h5>
          {introduction}
          {gotoProfile}
        </div>
      </div>
    </>
  );
}

export default Intro;
