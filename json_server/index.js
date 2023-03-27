import jsonServer from "json-server";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./router/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const routerV1 = jsonServer.router(__dirname + "/jsonDb/db.json");

const middlewares = jsonServer.defaults();

const db = routerV1.db;

server.use(middlewares);
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/blogs/:id/related", (req, res) => {
  const blogId = req.params.id;
  const blog = db.get("blogs").find({ id: blogId }).value();

  if (!blog) return res.status(200).json([]);

  const authorId = blog.author.node.id;

  const relatedBlog = db
    .get("blogs")
    .filter((b) => b.author.node.id === authorId)
    .slice(0, 3);

  res.status(200).json(relatedBlog);
});



server.get("/products/sales", (req, res) => {
  console.log(123);
  const products = db.get("products").filter(product => Boolean(product.price)).slice(0, 8)
  return res.status(200).json(products);
})

server.post("/products/comments", (req, res) => {
  const { author, content, parentId, id } = req?.body;

  const comment = { id: Date.now(), author, content, date: new Date(), parentId };

  if (content === "") return res.status(400).json({ error: "Content can't be empty" })

  const blog = db.get("products").find({ id: id }).value(); // Get the blog object from the database

  if (parentId) {
    const parentComment = db.get("products").find({ id: id }).get("reviews").get("nodes").find({ id: parentId }).value(); // Get the parent comment from the database
    parentComment.replies = { nodes: [...parentComment.replies.nodes, comment] }; // Update the parent comment with the new reply
    db.write(); // Write the updated comment to the database
  } else {
    console.log(1);

    db.get("products").find({ id: id }).get("reviews").get("nodes").push(comment).write(); // Add the comment to the blog's comments array
  }
  res.status(200).json(blog);
});


router(server, db, routerV1)


server.listen(4000, () => {
  console.log("JSON Server is running");
});
