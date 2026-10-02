# REST API Backend for Quora Sigma

A simple REST API-based backend project built using **Node.js, Express.js, and EJS**.  
This project demonstrates the basic **CRUD operations** used in a Quora-like posting system.

## 🚀 Features

- Create new posts
- View all posts
- View a single post
- Update existing posts
- Delete posts
- Generate unique post IDs using UUID
- Use HTTP methods such as GET, POST, PATCH, and DELETE
- EJS-based frontend views
- Static CSS and frontend assets using the `public` folder

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **EJS**
- **UUID**
- **Method Override**
- **HTML/CSS**
- **JavaScript**

## 📁 Project Structure

```text
REST_API_BACKEND_FOR_QUORA_SIGMA/
│
├── public/              # Static files such as CSS and frontend assets
├── views/               # EJS templates
├── index.js             # Main Express server and API routes
├── package.json         # Project dependencies and configuration
├── package-lock.json    # Dependency lock file
└── .gitignore           # Files ignored by Git
```

## 🔄 REST API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Checks whether the server is working |
| GET | `/posts` | Displays all posts |
| GET | `/posts/new` | Displays the form to create a new post |
| POST | `/posts` | Creates a new post |
| GET | `/posts/:id` | Displays a particular post |
| GET | `/posts/:id/edit` | Displays the edit form |
| PATCH | `/posts/:id` | Updates an existing post |
| DELETE | `/posts/:id` | Deletes a post |

## 🧩 CRUD Operations

### Create
Uses:

```text
POST /posts
```

Creates a new post using the username and content submitted through the form.

### Read
Uses:

```text
GET /posts
GET /posts/:id
```

Used to display all posts or a specific post.

### Update
Uses:

```text
PATCH /posts/:id
```

Updates the content of an existing post.

### Delete
Uses:

```text
DELETE /posts/:id
```

Deletes a selected post.

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Syed-mohammad-wasique-Junaid/REST_API_BACKEND_FOR_QUORA_SIGMA.git
```

Move into the project directory:

```bash
cd REST_API_BACKEND_FOR_QUORA_SIGMA
```

Install the dependencies:

```bash
npm install
```

## ▶️ Running the Project

Start the server using:

```bash
node index.js
```

Or, if using Nodemon:

```bash
npx nodemon index.js
```

The server runs on:

```text
http://localhost:8080
```

## 💾 Data Storage

Currently, the project uses an **in-memory JavaScript array** to store posts.

Therefore, posts created during runtime are lost when the server is restarted.

A database such as **MongoDB, MySQL, PostgreSQL, or SQLite** can be integrated in the future for permanent data storage.

## 🎯 Learning Objectives

This project was created to understand:

- REST API fundamentals
- CRUD operations
- HTTP methods
- Express.js routing
- Middleware
- EJS templating
- Dynamic routes
- UUID-based identifiers
- Method overriding
- Git and GitHub project management

## 👨‍💻 Author

**Junaid**

GitHub:  
https://github.com/Syed-mohammad-wasique-Junaid

## 📄 License

This project is licensed under the ISC License.