### Node.js Questions

1. **What is Node.js, and what are its main uses?**
   - **Node.js** is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code on the server side, making it possible to build scalable network applications. Node.js is event-driven, non-blocking (asynchronous), and is designed for building data-intensive, real-time applications, especially for network applications like APIs, web servers, and microservices.

2. **Explain the concept of an event loop in Node.js.**
   - The **event loop** is a core part of Node.js's asynchronous, non-blocking model. It allows Node.js to handle multiple operations concurrently without creating multiple threads. The event loop continuously monitors the call stack and callback queue, and whenever the call stack is empty, it picks the next function from the callback queue and pushes it to the call stack for execution. This enables Node.js to manage high-concurrency operations efficiently.

3. **What are callbacks, and how do they work in Node.js?**
   - **Callbacks** are functions that are passed as arguments to other functions and are executed after the completion of those functions. In Node.js, callbacks are extensively used to handle asynchronous operations. For instance, when a file is read, a callback function is provided, which will execute once the reading operation is completed. This ensures that other code can execute without waiting for the file read operation to finish.

4. **What is npm, and how is it used in Node.js?**
   - **npm (Node Package Manager)** is a tool used to install, share, and manage packages (libraries and dependencies) in Node.js. It provides a vast registry of open-source packages that developers can use to add functionality to their applications. npm is also used to manage versioning and handle dependencies in a project, making it easier to organize and maintain project libraries.

5. **How can you create a simple HTTP server in Node.js?**
   ```javascript
   const http = require('http');
   
   const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Hello, World!');
   });
   
   server.listen(3000, () => {
     console.log('Server running at http://localhost:3000/');
   });
   ```
   - This example creates a simple HTTP server that responds with "Hello, World!" for every request on port 3000.

6. **What is middleware in Express.js, and why is it useful?**
   - **Middleware** in Express.js refers to functions that execute during the request-response cycle. Middleware functions can modify request and response objects, end the request-response cycle, or call the next middleware function in the stack. Middleware is useful for tasks like logging, authentication, error handling, and parsing request bodies. It allows for better separation of concerns and modular code.

7. **What are some common built-in modules in Node.js?**
   - Common built-in modules in Node.js include:
     - `http`: for creating HTTP servers and handling requests.
     - `fs` (File System): for file operations like reading and writing files.
     - `path`: for handling file and directory paths.
     - `os`: for interacting with the operating system.
     - `url`: for URL parsing and formatting.
     - `crypto`: for cryptographic operations like hashing and encryption.

### MongoDB Questions

8. **What is MongoDB, and how does it differ from traditional SQL databases?**
   - **MongoDB** is a NoSQL, document-oriented database. It stores data in flexible, JSON-like documents instead of tables and rows, as in SQL databases. MongoDB's schema-less design allows for more flexibility in storing and querying data. Unlike SQL databases that rely on structured tables with fixed columns, MongoDB uses collections of documents that can vary in structure, making it ideal for unstructured or semi-structured data.

9. **What is a document in MongoDB, and how is it structured?**
   - A **document** in MongoDB is a data structure similar to a JSON object, with key-value pairs representing fields and their corresponding data. Each document is self-contained and can have a unique structure from other documents within the same collection. For example:
     ```json
     {
       "_id": "unique_id",
       "name": "John Doe",
       "age": 30,
       "skills": ["JavaScript", "Node.js", "MongoDB"]
     }
     ```
   - Documents can have nested fields, arrays, and various data types.

10. **Explain the concept of a collection in MongoDB.**
    - A **collection** is a group of MongoDB documents, akin to a table in an SQL database. Collections store related documents, but unlike tables, collections in MongoDB are schema-less, allowing each document in a collection to have its own structure.

11. **How do you insert a document into a MongoDB collection?**
    ```javascript
    const MongoClient = require('mongodb').MongoClient;
    
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
      if (err) throw err;
      const db = client.db('exampleDB');
      db.collection('users').insertOne({
        name: "John Doe",
        age: 30,
        skills: ["JavaScript", "Node.js"]
      }, (err, result) => {
        if (err) throw err;
        console.log("Document inserted:", result.insertedId);
        client.close();
      });
    });
    ```
    - This code connects to a MongoDB instance, selects a database and a collection, and inserts a new document.

12. **What command would you use to find all documents in a MongoDB collection?**
    ```javascript
    db.collection('users').find().toArray((err, result) => {
      if (err) throw err;
      console.log(result);
    });
    ```
    - This command fetches all documents from the `users` collection and prints them as an array. In the MongoDB shell, this would simply be `db.users.find()`.
