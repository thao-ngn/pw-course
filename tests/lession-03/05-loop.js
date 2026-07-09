//1
let sum = 0;
for(let i =1 ; i <= 100 ; i++){
    sum +=i;
}
console.log(sum);

//2

//3
let i = {}
    for (let i = 1; i<100; i++){
        if (i % 2 === 1) ;{
            console.log(i);
    }
}

//4
let email = {
    username : "user",
    number: i,
    email: "@example.com"
}

for (let i = 1 ; i<=10; i++){
    console.log(email.username + i + email.email);
}

//5
let doanhThu = {
    Jan : [
        {
            "month" : 1,
            "total" : 100
        }
    ],
    Feb : [
        {
            "month" : 2,
            "total" : 200
        }
    ],
        Mar : [
        {
            "month" : 3,
            "total" : 300
        }
    ],
        Apr : [
        {
            "month" : 4,
            "total" : 400
        }
    ],
        May : [
        {
            "month" : 5,
            "total" : 500
        }
    ],
        Jun : [
        {
            "month" : 6,
            "total" : 600
        }
    ],
        Jul : [
        {
            "month" : 7,
            "total" : 700
        }
    ],
        Aug : [
        {
            "month" : 8,
            "total" : 800
        }
    ],
        Sep : [
        {
            "month" : 9,
            "total" : 900
        }
    ],
        Oct : [
        {
            "month" : 10,
            "total" : 1000
        }
    ],
        Nov : [
        {
            "month" : 11,
            "total" : 1100
        }
    ],
        Dec : [
        {
            "month" : 12,
            "total" : 1200
        }
    ]

}
console.log(doanhThu.Jan[0].total+doanhThu.Feb[0].total
    +doanhThu.Mar[0].total+doanhThu.Apr[0].total+doanhThu.May[0].total+doanhThu.Jun[0].total
    +doanhThu.Jul[0].total+doanhThu.Aug[0].total+doanhThu.Sep[0].total+doanhThu.Oct[0].total
    +doanhThu.Nov[0].total+doanhThu.Dec[0].total);