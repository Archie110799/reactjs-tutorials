# Sử dụng Redux
Tạo Trang web quản lý Supplier như sau:
Trang web bao gồm:
- Navifation gồm 2 item: List, Form
- Màn hình List : Như hình list.png
- Màn hình Form : Như hình form.png 
+ Khi có branch No -> Click btn Gen address, Field Address sẽ có giá trị tương ứng như sau:
001 -> 43 Domenic Horse
002 -> 92 Run Bear
Others -> 75 Chauncey Lion
+ Field branch No: max 5 kí tự không.
+ Btn Gen address chỉ enable khi Field branch No có giá trị khác rỗng

{
    "suppliers" : [
        {
            "createdAt": "2022-07-26T02:19:57.873Z",
            "name": "Sammy Boehm",
            "branch": "horse",
            "address": "43 Domenic Horse",
            "id": "1"
        },
        {
            "createdAt": "2022-07-25T14:42:04.295Z",
            "name": "Colleen Funk",
            "branch": "bear",
            "address": "92 Run Bear",
            "id": "2"
        },
        {
            "createdAt": "2022-07-26T01:02:44.629Z",
            "name": "Randolph Kuhn",
            "branch": "lion",
            "address": "75 Chauncey Lion",
            "id": "3"
        },
    ]
}

const textAddress = ["43 Domenic Horse", "92 Run Bear", "75 Chauncey Lion"];