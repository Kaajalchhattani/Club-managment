import express from "express"
import mysql from "mysql"
import cors from 'cors'

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
    db.query(q,(err,data)=>
    {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/update",(req,res)=>
{
    const q="Insert into `update`(`id`,`title`,`description`,`link`,`image`) values(?)"
    const values=[
        req.body.id,
        req.body.title,
        req.body.description,
        req.body.link,
        req.body.image
    ];
    db.query(q,[values],(err,data)=>
    {
        if(err) return res.json(err)
        return res.json("upcoming event updated")
    })

})

app.listen(8800,()=>{
    console.log("connected to backend")
})