# Json-server (https://mockapi.io)
- Tạo Project
- Tạo 2 resource như sau:
{
    "customer" : [
        {
            "createdAt": "2022-07-20T03:19:14.825Z",
            "name": "Lula Russel",
            "postCode": "12771",
            "address": "address 1",
            "dob": "11-07-1995",
            "email": "Haylie.Torphy@hotmail.com",
            "gender": false,
            "phone": "(354) 813-2316 x476",
            "id": "1"
        }
    ],
    "product" : [
        {
            "createdAt": "2022-07-19T19:15:37.486Z",
            "name": "Gorgeous Steel Bike",
            "color": "silver",
            "price": "364.00",
            "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
            "id": "1"
        }
    ]
}

# Tạo Website có 1 menu 
-> Click vào menu sẽ điều hướng như sau:
- Home : Về trang home
- Customers: List Customers
- Products : List Products

# Tại List
Show table bao gồm thông tin của list object. 
Đồng thời có: 
+ Nút detail -> Điều hướng đến object Detail
+ Nút delete -> Delete object -> Show Toast

# Tại Form đăng ký
+ Các field phù hợp phục vụ cho Register object 
* Lưu ý: id, createdAt là 2 trường k cần sent data, mock-server sẽ tự gen 2 trường này 

# Tại Form Detail
+ Show UI giống form đăng ký. 
+ Có chức năng Update object


