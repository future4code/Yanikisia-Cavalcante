import express from "express";
import cors from 'cors';
import { AddressInfo } from "net"

const app = express();

app.use(express.json());
app.use(cors());

type User = {
  id: number,
  name: string,
  website: string,
  email: string,
  phone: string
}
type Post = {
  id: number,
  title: string,
  body: string,
  userId: number
}

const user1: User = {
  id: 1,
  name: "bruno",
  website: "http:bruno.com.br",
  email: "bruno@gmail.com",
  phone: "96 9445-3445"
}

const user2: User = {
  id: 2,
  name: "jose",
  website: "http:jose.com.br",
  email: "jose@gmail.com",
  phone: "96 9445-3445"
}

const user3: User = {
  id: 3,
  name: "yanikisia",
  website: "http:yanikisia.com.br",
  email: "yanikisia@gmail.com",
  phone: "96 9445-3445"
}

const user4: User = {
  id: 4,
  name: "bruna",
  website: "http:bruna.com.br",
  email: "bruna@gmail.com",
  phone: "96 9445-3445"
}
const user5: User = {
  id: 5,
  name: "christian",
  website: "http:christian.com.br",
  email: "christian@gmail.com",
  phone: "96 9445-3445"
}

const post1: Post = {
  id: 1,
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  userId: 1
}
const post2: Post = {
  userId: 1,
  id: 2,
  title: "qui est esse",
  body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
}

const post3: Post = {
  userId: 2,
  id: 3,
  title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
}
const post4: Post = {
  userId: 2,
  id: 4,
  title: "in quibusdam tempore odit est dolorem",
  body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
}
const post5: Post = {
  userId: 3,
  id: 5,
  title: "asperiores ea ipsam voluptatibus modi minima quia sint",
  body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
}
const post6: Post = {
  userId: 3,
  id: 6,
  title: "dolor sint quo a velit explicabo quia nam",
  body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
}
const post7: Post = {
  userId: 4,
  id: 7,
  title: "ullam ut quidem id aut vel consequuntur",
  body: "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
}
const post8: Post = {
  userId: 4,
  id: 8,
  title: "ullam ut quidem id aut vel consequuntur",
  body: "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
}
const post9: Post = {
  userId: 5,
  id: 9,
  title: "ullam ut quidem id aut vel consequuntur",
  body: "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
}

const post10: Post = {
  userId: 5,
  id: 10,
  title: "non est facere",
  body: "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe"
}


const users = [user1, user2, user3, user4, user5]
const posts = [post1, post2, post3, post4, post5, post6, post7, post8, post9, post10]

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

app.get('/', (req, res) => {
  console.log("BATEU")

  res.status(200).send("oi") // resposta de requisição
})

app.get('/users', (req, res) => {
  console.log("aaaaaaaaa")

  res.status(200).send(users) // resposta de requisição
})

app.get('/posts', (req, res) => {
  console.log("posts")

  res.status(200).send(posts) // resposta de requisição
})

app.get('/post', (req, res) => {
  const userId = Number(req.query.userId)

  if (!userId) res.status(400).send("ID inváido")

  const arrayResult = posts.filter((post: any) => {
    if (post.userId === userId) {
      return post
    }
  })

  res.status(200).send(arrayResult)
})

app.delete('/delPost', (req, res) => {
  const userId = Number(req.query.userId)
  const postId=Number(req.query.postId)
  let deletedPost:any=[]
  let result:any=[]

  if (!userId) res.status(400).send("ID inváido")
  if (!postId) res.status(400).send("PotID inváido")

  let arrayResult = posts.filter((post: any) => {
    if (post.userId === userId) {
      return post
    }
  })
  console.log(arrayResult.length)
  if(arrayResult.length>1){
     deletedPost = arrayResult.filter((post: any) => {
      if (post.id !== postId) {
        return post
      }
     
    })
    result=deletedPost
  }
  else{
    result=arrayResult=[]
  }

  res.status(200).send(result)
})

app.delete("/userDelete",(req,res)=>{
  const userId = Number(req.query.userId)
  if (!userId) res.status(400).send("ID inváido")
  let arrayResult = users.filter((user: any) => {
    if (user.id !== userId) {
      return users
    }
  })
  res.status(200).send(arrayResult)
})