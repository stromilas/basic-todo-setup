import { Prisma, PrismaClient } from '@prisma/client';
import express from 'express';
import cors, { CorsOptions} from "cors"

const prisma = new PrismaClient();
const app = express();
const port: number = 8080;

const corsOptions: CorsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json());

app.get('/todos', async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
})

app.post('/todos', async (req, res) => {
  const todo = await prisma.todo.create({
    data: {
      title: req.body.title,
      completed: req.body.completed,
    },
  });
  res.json(todo);
})

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});