# Redux
- Thư viện js quản lý state, và state này có thể dự đoán được 
- Sử dụng kiến trúc uni-derectional data flow (đi 1 chiều)
# Flow
View:
Action: JS Object chứa thông tin muốn làm (CRUD sp, ...) -> Gửi đến Store
Store : Có 1 store duy nhất
- Reducer: Handle state dựa vào thông tin action gửi lên
(Function biến đổi state hiện tại -> state mới theo data của Action gửi lên)
- State : được update -> View re-render
# Sử dụng
- Sử dụng nếu state muốn quản lý GLOBAL (state dùng ở nhiều trang khác nhau)
* Quản lý state trên redux: cần kiểm soát được. (Ảnh hưởng đến perfomance)
Ví dụ: Thông tin user

- Hỗ trợ tính năng undo, redo (uni-derectional)
- Cần catch data để tái sử dụng lần sau

# Step
- rootReducer
- createStore
- Add Provider, store 
- Tạo components
- Tạo reducers, action của component

# Thư viện
Redux Logger    : Log action
Redux Persist   : Reload vẫn giữ Redux (Khi Reload -> Redux bị mất)
Redux Undo      : Hỗ trợ tính năng undo/redo
Redux Thunk     : Sử dụng Async actions

# Redux Toolkit
Thư viện giúp viết Redux tốt hơn, dễ hơn, đơn giản hơn
Ba vấn đề làm nền tảng ra đời RTK:
- Configuring a Redux store is much complicated.
- I have a lot of packages to get Redux to do anything useful (DevTools, redux-thunk...)
- Redux requires too much boilerplate code

# Function
- configureStore()  : config sẵn DevTools, redux-thunk để thực hiện async actions
- createReducer()   : 
- createSlice()     : Tổng hợp reducer và action tương ứng
- createSelector
- createAsyncThunk()
- createEntityAdapter

# Thư viện
- ImmerJs: chỉnh sửa trực tiếp trên Object hiện tại mà k cần clone Object mới



