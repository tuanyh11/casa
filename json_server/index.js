import jsonServer from 'json-server';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const server = jsonServer.create()
const routerV1 = jsonServer.router(__dirname + '/jsonDb/db.json')

const middlewares = jsonServer.defaults()

const db = routerV1.db

const dbBlog = routerBlog.db

server.use(middlewares)

const getData = (key) => {
  return JSON.parse(JSON.stringify(db.get(key)))
}

server.get('/products', (req, res) => {
    res.status(200).json(db.get('product'))
})

server.get('/products/search', (req, res) => {
    const { q } = req.query; // Get the search query from the URL params
    const products = JSON.parse(JSON.stringify(db.get("product"))).data.products.nodes.filter(product => {
      return product.name.toLowerCase().includes(q.toLowerCase());
    });

    res.status(200).json(products);
});

// server.get('/blog/', (req, res) => {

  

//   res.status(200).json(data);
// })

server.use(routerV1)

server.listen(4000, () => {
    console.log('JSON Server is running')
})