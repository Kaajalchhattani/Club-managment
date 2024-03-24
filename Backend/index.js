import express from "express"
import mysql from "mysql"
import cors from "cors"

const app=express()


const db=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Kaajal@05",
        database:"club"
    }
)
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("hello this is backend")
})


app.get("/update",(req,res)=>
{
    const q="SELECT * from `update`"
    db.query(q,(err,data)=>{
    
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/update",(req,res)=>
{
    console.log("a")
    console.log(req, req.body)
    const q="Insert into `update`(`id`,`title`,`description`,`link`,`image`) values(?)"
    const values=[
        parseInt(req.body.id),
        req.body.title,
        req.body.desc,
        req.body.link,
        req.body.image
    ];
    console.log(values)
    try {
        db.query(q, [values], (err, data) => {
            if (err) {
                console.log("erorr occured -------------");
                console.log(err.message)
                return res.status(500).json({ error: err.message });
            }
            return res.json("upcoming event updated");
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }

})

app.delete("/update/:id",(req,res)=>
{
    const updateid=Number(req.params.id)
    const q="delete from `update` where id= ?"
    try {
        db.query(q, [updateid], (err, data) => {
            if (err) {
                console.log("erorr occured -------------");
                console.log(err.message)
                return res.status(500).json({ error: err.message });
            }
            return res.json("book has been updated");
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
})

app.listen(8800,()=>{
    console.log("connected to backend")
})