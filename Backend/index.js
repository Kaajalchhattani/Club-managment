import express from "express"
import mysql from "mysql"
import cors from "cors"
import bcrypt from "bcrypt"
import bodyParser from"body-parser"
import cookieParser from "cookie-parser"
import session from "express-session"
const app=express()

const saltRoutes=10;


const db=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Kaajal@05",
        database:"club"
    }
)
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST","DELETE","UPDATE"],
    credentials:true
}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))

app.use(session({
    key:"userid",
    secret:"Kaajal",
    resave:false,
    saveUninitialized:false,
    cookies:{
        expires:60*60*1000,
    }
,
}))

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
        const q="Insert into `update`(`title`,`description`,`link`,`image`) values(?)"
        const values=[
            
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

app.put("/update/:id",(req,res)=>
{   console.log("delete")
    const updateid=Number(req.params.id)
    const q="update `update` set `title`=? ,`description`=?,`link`=?,`image`=? where id=?"
    
    const values=[
        
        req.body.title,
        req.body.desc,
        req.body.link,
        req.body.image
    ];
    try {
        db.query(q, [...values,updateid], (err, data) => {
            if (err) {
                console.log(updateid)
                console.log("erorr occured -------------");
                console.log(err.message)
                return res.status(500).json({ error: err.message });
            }
            return res.json("book has been updated successfully");
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
})

app.listen(8800,()=>{
    console.log("connected to backend")
})



//LOGIN--------------------


app.get("/user",(req,res)=>
{ 
    const q="SELECT * from user"
    db.query(q,(err,data)=>{
    
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/login",(req,res)=>
{    if(req.session.user)
    {
        res.send({
            loggedIn:true,user:req.session.user
        })
    }
        else{
            res.send({loggedIn:false})
        }
    })
    
app.post("/user",(req,res)=>
{
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;

   bcrypt.hash(password,saltRoutes,(err,hash)=>{
    if(err){
        console.log(err);
    }
    db.query(
        "Insert into user (user,password,email) values (?,?,?)",
        [username,hash,email],
        (err,result)=>{
            console.log(err);
        }
    )
   }) 

})
app.post("/login",(req,res)=>
{
    const username=req.body.username;
    const password=req.body.password;

    db.query(
        "Select * from user where user=?;",
        [username],
        (err,result)=>{
            if(err)
            {
                res.send({err:err})
            }
           
                if(result.length>0)
                {
                   bcrypt.compare(password,result[0].password,(error,response)=>{
                    if(response)
                    {
                        req.session.user=result
                        console.log(req.session.user)
                        res.send(result)
                       
                    }
                    else{
                        res.send({message:"wrong usename or password"})
                    }
                   })
                }
                else{
                    res.send({message:"user does not exist"})
                }
            
        }
    )
})


////////////////////BLOG/////////////////////////////////

app.get("/Blog",(req,res)=>
{
    const q="SELECT * from posts"
    db.query(q,(err,data)=>{
    
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.post("/Blog",(req,res)=>
{
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    console.log(req, req.body)
    const q="Insert into posts(`title`,`content`,`author`,`imagelink`) values(?)"
    const values=[
        
        req.body.title,
        req.body.content,
        req.body.author,
        req.body.imagelink
       
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
app.delete("/Blog/:id",(req,res)=>
{
    const updateid=Number(req.params.id)
    const q="delete from posts where id= ?"
    try {
        db.query(q, [updateid], (err, data) => {
            if (err) {
                console.log("erorr occured -------------");
                console.log(err.message)
                return res.status(500).json({ error: err.message });
            }
            return res.json("posts has been updated");
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
})


  
// Route to fetch all blog posts
app.get("/Blog", (req, res) => {
    const sql = 'SELECT * FROM posts';
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error fetching posts' });
      } else {
        res.json(result);
      }
    });
  });
  
  // Route to fetch a single blog post by ID
  app.get('/Blog/:id', (req, res) => {
    const postId = req.params.id;
    const sql = 'SELECT * FROM posts WHERE id = ?';
    db.query(sql, [postId], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error fetching post' });
      } else if (result.length === 0) {
        res.status(404).json({ error: 'Post not found' });
      } else {
        res.json(result[0]);
      }
    });
  });

  ///////////////////////Admin Login//////////////////////////////////////////////////////////
  

app.get("/adminregister",(req,res)=>
{ 
    const q="SELECT * from admin"
    db.query(q,(err,data)=>{
    
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/adminlogin",(req,res)=>
{    if(req.session.user)
    {
        res.send({
            loggedIn:true,user:req.session.user
        })
    }
        else{
            res.send({loggedIn:false})
        }
    })
    
app.post("/adminregister",(req,res)=>
{
    const username=req.body.username;
    const password=req.body.password;

   bcrypt.hash(password,saltRoutes,(err,hash)=>{
    if(err){
        console.log(err);
    }
    db.query(
        "Insert into admin (user,password) values (?,?)",
        [username,hash],
        (err,result)=>{
            console.log(err);
        }
    )
   }) 

})
app.post("/adminlogin",(req,res)=>
{
    const username=req.body.username;
    const password=req.body.password;

    db.query(
        "Select * from admin where user=?;",
        [username],
        (err,result)=>{
            if(err)
            {
                res.send({err:err})
            }
           
                if(result.length>0)
                {
                   bcrypt.compare(password,result[0].password,(error,response)=>{
                    if(response)
                    {
                        req.session.user=result
                        console.log(req.session.user)
                        res.send(result)
                       
                    }
                    else{
                        res.send({message:"wrong usename or password"})
                    }
                   })
                }
                else{
                    res.send({message:"user does not exist"})
                }
            
        }
    )
})
/////////////////Members//////////////////////////////////////////


app.get("/members",(req,res)=>
{
    const q="SELECT * from members"
    db.query(q,(err,data)=>{
    
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.post("/members",(req,res)=>
{
    console.log("a")
    console.log(req, req.body)
    const q="Insert into members (`Name`,`Image`) values(?)"
    const values=[
        
        req.body.Name,
        req.body.Image
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