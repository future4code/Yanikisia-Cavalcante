import express, { Request, Response } from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

type ToDo= {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

const todo1:ToDo={
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
}
const todo2:ToDo={
    userId: 4,
    id: 2,
    title: "de444ctus aut autem",
    completed: true
}
const todo3:ToDo={
    userId: 2,
    id: 3,
    title: "comer biscoito",
    completed: false
}
const todo4:ToDo={
    userId: 5,
    id: 4,
    title: "delectus a aula",
    completed: true
}
const todo5:ToDo={
    userId: 16,
    id: 5,
    title: "dormir na cama",
    completed: false
}
const todo6:ToDo={
    userId: 4,
    id: 6,
    title: "cookies fazer no forno",
    completed: true
}
const todo7={
    userId: 14,
    id: 7,
    title: "oi oi oi",
    completed: false
}
const todo8:ToDo={
    userId: 3,
    id: 8,
    title: "delectus a jjj",
    completed: true
};
let todos=[todo1,todo2,todo3,todo4,todo5,todo6,todo7,todo8];
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

app.get("/ping", (req, res) => {
    res.status(200).send("pong");
});

app.post('/todos',(req:Request,res:Response)=>{
const { userId, completed, title } = req.body;

const newTodo:ToDo={id:todos.length+1,userId,completed,title}
    todos.push(newTodo);
    res.status(200).send(todos);
});

app.get("/todo/:status",(req,res)=>{
    const status= req.params.status;
    let statusResult:boolean;
    if(status==="false"){
        statusResult=false;
    } else if(status==="true"){
        statusResult=true;
    }
    else{
        res.status(400).send("status inváido");
    }
    const result=todos.filter((todo)=>{
        return todo.completed===statusResult; 
    });
    res.status(200).send(result);
});

app.put("/todo/:id/status",(req,res)=>{
    const todoId= Number(req.params.id);
    for(let i=0;i< todos.length;i++){
        if(todos[i].id === todoId){
           
            todos[i].completed=!todos[i].completed;

        };
    };
    res.status(200).send(todos);
})

app.delete("/todos/:id",(req,res)=>{
    const todoId= Number(req.params.id)
    for(let i=0;i< todos.length;i++){
        if(todos[i].id === todoId){
            todos.splice(todos.indexOf(todos[i]),1);
        };
    };
    res.status(200).send(todos);
});

app.get("/todo",(req,res)=>{
    const id= Number(req.query.id); 
    const result=todos.filter((todo)=>{
        return todo.userId===id;
    });
    res.status(200).send(result);
});

