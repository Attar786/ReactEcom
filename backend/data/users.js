import bcrypt from "bcryptjs"

const users = [
    {
    name : "adminuser",
    email :  "admin@gmail.com",
password :  bcrypt.hashSync('123456' , 10),
isAdmin : true,
    },

    {
        name : "ali",
        email :  "ali@gmail.com",
    password :  bcrypt.hashSync('123456' , 10),
    isAdmin : false,
        },

        {
            name : "zaibi",
            email :  "zaibi@gmail.com",
        password :  bcrypt.hashSync('123456' , 10),
        isAdmin : false,
            },
];

export default users;