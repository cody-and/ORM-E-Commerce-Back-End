# ORM E Commerce Back End

This is back end database work for a fake E Commerce website. This project uses express and sequalize to organize data from a database so this imaginary E Commerce store knows information about their products. This project uses CRUD to organize the api so you can easily contribute to the database. 

## ORM E Commerce Back End - FAQ

#### What is this project about?
This is a practice project that involves the development of the back end for a simulated E Commerce website. It utilizes Express.js and Sequelize to manage data stored in a database. The purpose is to provide the E Commerce store with a structured way to handle product information and support CRUD operations through the API.

#### What technologies are used in this project?
- **Express.js**: A web application framework for Node.js that simplifies the creation of APIs and routes.
- **Sequelize**: An Object-Relational Mapping (ORM) library for Node.js that provides an abstraction layer for database operations.
- **Database**: A relational database system is used to store and manage product data for the E Commerce store.

#### What is the main functionality of this project?
The main functionality of this project is to provide a back end system that allows the E Commerce store to perform CRUD operations on their product data. This includes creating, reading, updating, and deleting products using API endpoints.

#### How does the API work?
The API endpoints are designed to correspond to CRUD operations. Here are some of the key API routes:
- `GET /api/products`: Gets a list of all products.
- `GET /api/products/:id`: Gets details of a specific product by its ID.
- `POST /api/products`: Posts a new product using the provided data.
- `PUT /api/products/:id`: Updates the details of a product with the specified ID.
- `DELETE /api/products/:id`: Deletes a product by its ID.


#### How do I set up and run the project?
1. Clone the project repository.
2. Install the required dependencies using `npm install`.
3. Configure the database connection in the .env file.
4. Run the server using `node server.js`.
5. The server will start, and you can begin testing the API endpoints using tools like insomnia.

#### Is this project for a real E Commerce website?
No, this project is for educational and practice purposes and is not intended for use in a real E Commerce environment. It simply just simulates the back end functionality required for an E Commerce store.

### Simulation Video

Demo Link: https://streamable.com/bfm1k7
