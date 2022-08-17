> Documents of course will be move to (https://documents.aptech.io/docs/category/aptech-mern)

# ⭐ A. SETUP DEVELOPMENT ENVIROMENT

1. Nodejs: https://nodejs.org/en/ (Cài bản LTS)
2. Yarn (https://yarnpkg.com/lang/en/docs/install/#windows-stable)
3. Git SCM: https://git-scm.com/download/
4. Visual Studio Code: https://code.visualstudio.com/Download
5. Cài đặt các Extensions cho Visual Studio Code
   - Auto Rename (Jun Han)
   - Auto Close Tag (Jun Han)
   - ESLint (Microsoft)
   - IntelliCode (Microsoft)
   - JavaScript (ES6) code snippets (charalampos karypidis)
   - ES7+ React/Redux/React-Native snippets (dsznajder)
   - npm (Microsoft)
   - npm Intellisense (Christian Kohler)
   - Prettier - Code formatter (Prettier)
   - TSLint (Microsoft)
   - Typescript React code snippets (infeng)
   - Vscode-styled-components (Julien Poissonnier)
6. Cài đặt các tiện ích cho Visual Studio Code:

   - Better Comments (Aaron Bond)
   - Color Highlight (Sergii N)
   - Icon: Material Icon Theme (Philipp Kief)
   - Theme: Dracula Official (Dracula Theme)

7. Các tài nguyên
   - Bootstrap: https://www.npmjs.com/package/bootstrap/v/4.6.0#quick-start
     > Add index.js: import 'bootstrap/dist/css/bootstrap.min.css'
   - Avatars: https://pravatar.cc/
   - Icons: https://react-icons.github.io/react-icons/
   - Color:

     > https://flatuicolors.com/

     > https://ant.design/docs/spec/colors

     > https://mui.com/material-ui/customization/color/

   - Images:

     > https://unsplash.com/

     > https://pixabay.com/

# ⭐ B. REACT BASIC

## 1. Javascript ESNext

[Xem chi tiết](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/docs/1.md)

## 2. React Basic

[Xem chi tiết](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/docs/2.md)

## 3. React Hooks

[Xem chi tiết](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/docs/3.md)

# ⭐ C. REACT ROUTER

[Xem chi tiết](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/docs/4.md)

# ⭐ D. STATE MANAGEMENT WITH REDUX & SAGAS

[Xem chi tiết](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/docs/5.md)

# ⭐ E. USING UI KIT WITH ANTD DESIGN & MUI

## [Xem chi tiết: Ant Design](https://ant.design/)

- 🌈 Enterprise-class UI designed for web applications.
- 📦 A set of high-quality React components out of the box.
- 🌻 Written in TypeScript with predictable static types.
- ⚙️ Whole package of design resources and development tools.
- 🌍 Internationalization support for dozens of languages.
- 🎨 Powerful theme customization in every detail.

## [Xem chi tiết: MUI](https://mui.com/)

- MUI offers a comprehensive suite of UI tools to help you ship new features faster.
- Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.


# GIT
## Add repo
git init
git remote add origin <HTTPS>
git checkout -b  master
git add .
git commit -m 'init code'
git push
git fetch
## git add .
Thêm toàn bộ những file thay đổi
## git commit -m 'text'
Tạo commit
## git push
Đẩy code lên github
## git log --oneline
Check lịch sử commit ở local
## git reset 
Reset lại commit trước đó
## JSON SERVER
install : npm install json-server axios -- save-dev
config  : "mock-server": "json-server ./mock-db/db.json",
run     : npm run mock-server
