import jsonServer from "json-server";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
import cors from "cors";

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

const getData = (key) => {
  return JSON.parse(JSON.stringify(db.get(key)));
};


server.get("/products/search", (req, res) => {
  const { q } = req.query; // Get the search query from the URL params
  const products = getData("product").data.products.nodes.filter((product) => {
    return product.name.toLowerCase().includes(q.toLowerCase());
  });

  res.status(200).json(products);
});

server.post("/blog/comments", (req, res) => {
  const { author, content, parentId, blogId } = req?.body;

  const comment = { id: Date.now(), author, content, date: new Date(), parentId };

  if (content === "") return res.status(400).json({ error: "Content can't be empty" })

  const blog = db.get("blog").find({ id: blogId }).value(); // Get the blog object from the database

  if (parentId) {
    const parentComment = db.get("blogs").find({ id: blogId }).get("comments").get("nodes").find({ id: parentId }).value(); // Get the parent comment from the database
    parentComment.replies = { nodes: [...parentComment.replies.nodes, comment] }; // Update the parent comment with the new reply
    db.write(); // Write the updated comment to the database
  } else {
    console.log(1);

    db.get("blogs").find({ id: blogId }).get("comments").get("nodes").push(comment).write(); // Add the comment to the blog's comments array
  }


  res.status(200).json(blog);
});

server.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  await new Promise((res, rej) => setTimeout(res, 5000))
  db.get("contact").push({ name, email, subject, message }).write();
  res.status(200).json({ message: "Thank you for contacting us" });
})

server.use(routerV1);

server.listen(4000, () => {
  console.log("JSON Server is running");
});
