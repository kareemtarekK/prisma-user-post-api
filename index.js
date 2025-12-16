import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import express from "express";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
  const { firstName, lastName, age } = req.body;
  const user = await prisma.user.create({
    data: { firstName, lastName, age },
  });
  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json({
    status: "success",
    length: users.length,
    data: {
      users,
    },
  });
});

app.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: { firstName, lastName, age },
  });
  res.status(200).json({
    status: "success",
    data: {
      updatedUser,
    },
  });
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await prisma.user.delete({
    where: { id: parseInt(id) },
  });
  res.status(200).json({
    status: "success",
    data: {
      deletedUser,
    },
  });
});

app.post("/post", async (req, res) => {
  const { title, data, active, user_id } = req.body;
  const post = await prisma.post.create({
    data: { title, data, active, user_id },
    include: {
      user: true,
    },
  });
  res.status(201).json(post);
});

app.get("/post", async (req, res) => {
  const posts = await prisma.post.findMany({
    where: {
      user: {
        firstName: "kareem",
      },
    },
    // where: {
    //   user_id: { gte: 3 },
    // },
    // where: {
    //AND  OR: [{ title: { startsWith: "p" } }, { title: { endsWith: "o" } }],
    // },
    // where: {
    //   title: { endsWith: "5" },
    // },
    // where: {
    //   title: { startsWith: "p" },
    // },
    // where: {
    //   title: { in: ["post"] },
    // },
    // where: {
    //   title: { in: ["post", "post1", "post3", "post4", "post4"] },
    // },
    // where: {
    //   title: { not: "post" },
    // },
    // where: {
    //   title: { equals: "post" },
    // },
    // orderBy: {
    //   createdAt: "asc",
    // },
    // where: {
    //   title: "post",
    // },
    // take: 2,
    // skip: 10,
  });
  res.status(200).json(posts);
});

app.post("/post/many", async (req, res) => {
  const posts = await prisma.post.createMany({
    data: req.body,
  });
  res.status(201).json(posts);
});

const port = 5555;
app.listen(port, "127.0.0.1", () => {
  console.log(`start server on port: ${port}.`);
});
