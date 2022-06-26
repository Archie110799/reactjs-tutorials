import React from "react";

const TEXT__INTRO = "Park Chae-young (tiếng Hàn: 박채영; tên tiếng Anh: Roseanne Park, sinh ngày 11 tháng 2 năm 1997), thường được biết đến với nghệ danh Rosé (Hangul: 로제)[2] là nữ ca sĩ người New Zealand gốc Hàn Quốc, thành viên của nhóm nhạc nữ Blackpink do YG Entertainment thành lập và quản lý. Sinh ra ở New Zealand và lớn lên ở Úc, Rosé chính thức ký hợp đồng với công ty YG Entertainment của Hàn Quốc sau một buổi thử giọng vào năm 2012 và sau đó trở thành thực tập sinh tại đây trong vòng 4 năm. Cô ra mắt với tư cách là giọng ca chính của Blackpink vào tháng 8 năm 2016. Tháng 3 năm 2021, cô phát hành album đĩa đơn solo đầu tay mang tên R."

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Park",
  lastName: "Chae-young",
  avatarUrl:
    "https://cdnmedia.thethaovanhoa.vn/Upload/leenEplQKY7jsunvYUYgg/files/2022/05/Rose-Elle01.jpeg",
  profile: "https://www.instagram.com/roses_are_rosie/",
};

function Intro() {
  const gotoProfile = <a href={user.profile}> Rosé </a>;
  const introduction = React.createElement(
    "p",
    { className: "greeting" },
    TEXT__INTRO
  );
  return (
    <>
      <h1>Hello, {user.lastName}</h1>
      <img
        src={user.avatarUrl}
        alt={formatName(user)}
        width="500"
        height="300"
      ></img>
      <h3>Profile: {gotoProfile}</h3>
      {introduction}
    </>
  );
}

export default Intro;
