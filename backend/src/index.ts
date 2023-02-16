import { Prisma, PrismaClient } from '@prisma/client';
import express from 'express';
import cors, { CorsOptions} from "cors"
import bodyParser from 'body-parser';

const prisma = new PrismaClient();
const app = express();
const port: number = 8080;

const corsOptions: CorsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());


app.get('/todos', async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
})

app.post('/todos', async (req, res) => {
  console.log(req.body)  
  const todo = await prisma.todo.create({
    data: {
      title: req.body.title,
    },
  });
  res.json(todo);
})

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});