import express from "express";
import qr from "qr-image";

const app=express();
const port=3000;

app.use(express.urlencoded({extended: true}));
// app.use(express.json());
app.use(express.static("public"));

app.post("/generate",(req,res)=> {
    const url=req.url;
    if(!url){
       return res.status(400).send("URL is required)");
    }
    const qr_png = qr.image(url, { type: "png" });
    res.setHeader("Content-Type", "image/png");
    qr_png.pipe(res);
});
app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})
