var express =require("express"); //  express 套件載入程式
var app=express(); //  呼叫 express 產生應用程式物件

app.get("/", function(req, res){ // 連線到根目錄 / 時
    res.send("Hello, My Server!")
});

app.use(express.static("html")); // 把在 "html (資料夾)" 的資料提交給 express



app.get("/getData", function(req ,res){ // 連線到 /getData 時
 
    if (req.query.number.length==0){
        res.send("Lack of Parameter");
    }else{
        let num=req.query.number;
        num=Number(num);
        if (isNaN(num)){
            res.send("Wrong Parameter");
        }else{
        let sum=0;
    
        for(let i=0;i<=parseInt(num);i++){
            sum+=i};
        console.log(sum);
        sumJson={sum:sum};
        console.log(sumJson);
        res.json(sumJson.sum);
        // res.json(sumJson);
            }      
        }
    })


app.listen(3000,function(){ 
    console.log("伺服器已經啟動在 http://localhost:3000/");
});