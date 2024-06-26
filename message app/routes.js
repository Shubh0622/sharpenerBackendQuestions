const fs = require('fs');

const requestHandler = ((req,res)=>{
    const url=req.url;
    const method =req.method;
    if(url==='/'){
        let message;
        if(fs.existsSync('F:/SharpenerProjects/BackendQuestions/message app/message.txt')){
            message = fs.readFileSync('F:/SharpenerProjects/BackendQuestions/message app/message.txt','utf8');
        }
        else{
            message="";
        }
        res.write('<html>');
        res.write('<head><title>Message App</title></head>');
        res.write('<body>');
        res.write(`<p>${message}<\p>`);
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
        });
        res.writeHead(302,  {Location: "/"});
        return res.end();
    }
});

module.exports = requestHandler;