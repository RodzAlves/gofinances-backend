# <b> 💸 GoFinances API </b>

<h4 align = "start">
<img src = "https://img.shields.io/static/v1?label=&message=NODEJS&color=fff&style=for-the-badge&logo=node.js" />
<img src = "https://img.shields.io/static/v1?label=&message=API&color=339933&style=for-the-badge&logo=json" />

</h4>

### Go Finances is an API designed to store incoming and outgoing financial transactions and allow the registration and listing of these transactions, in addition to allowing the creation of new records in the database by sending a csv file.

# <b> ⚡ Features </b>

- [x] Create new transaction.
- [x] Create tags when inserting new transactions.
- [x] Not create tags when they already exists.
- [x] List all transactions.
- [x] Not be able to create outcome transaction without a valid balance.
- [x] Delete a transaction.
- [x] Import transactions with CSV File.

# 🛠 <b> Technologies </b>

The following tools were used in the construction of the project:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/) - Framework for Node.js, offers a set of resources for applications.
- [TypeORM](https://typeorm.io/) - ORM (Object-Relational Mapper) for Node.js, makes the mapping of relational data to JavaScript and TypeScript objects.
- [PostgreSQL](https://www.postgresql.org/) - Database chosen to save transactions' informations.
  <br>

# <b> 🔥 Installation </b>

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). And for the database, PostgreSQL or your preferred database.

After that, let's move on to the next steps.

<br>

```bash
git clone https://github.com/RodzAlves/gofinances-backend.git
```

Access the project folder

```bash
cd gofinances-backend
```

Install dependencies

```bash
npm install or yarn
```

And the run API:

```bash
yarn dev or npm run dev

# The server will start in: http://localhost:3333
```

And ready! The API is already running.

<br>

# <b> ✴ Endpoints </b>

- **`POST /transactions`**:
  The route must receive `title`, `value`, `type` and `category` within the body of the request, the type of the transaction being either type, which should be `income` for entries (deposits) and `outcome` for exits (withdrawals).

```json
{
  "title": "Salary",
  "value": "5000",
  "type": "income",
  "category": "Salary"
}
```

- **`GET /transactions`**: The route returns all transactions registered so far. And the balance with values income, outcome and total.

```json
{
  "transactions": [
    {
      "id": "84eef62a-5213-47a0-8d36-5ffaf7c2aade",
      "title": "Salary",
      "type": "income",
      "value": "5000",
      "category_id": "8379b242-06c0-4a79-939f-8f3461897e33",
      "created_at": "2021-01-14T04:38:26.314Z",
      "updated_at": "2021-01-14T04:38:26.314Z",
      "category": {
        "id": "8379b242-06c0-4a79-939f-8f3461897e33",
        "title": "Salary",
        "created_at": "2021-01-14T04:36:21.019Z",
        "updated_at": "2021-01-14T04:36:21.019Z"
      }
    },
    {
      "id": "9b7f5742-7dc1-45f1-a693-7e57983d8fb9",
      "title": "Shopping Food",
      "type": "outcome",
      "value": "1500",
      "category_id": "1cf326fc-2950-417d-bbf8-a2dd1626c8c6",
      "created_at": "2021-01-14T05:44:48.648Z",
      "updated_at": "2021-01-14T05:44:48.648Z",
      "category": {
        "id": "1cf326fc-2950-417d-bbf8-a2dd1626c8c6",
        "title": "Food",
        "created_at": "2021-01-14T05:39:33.628Z",
        "updated_at": "2021-01-14T05:39:33.628Z"
      }
    }
  ],
  "balance": {
    "income": 5000,
    "outcome": 1500,
    "total": 3500
  }
}
```

- **`DELETE /transactions/:id`**: The route deletes a transaction with the `id` present in the route parameters.

* **`POST /transactions/import`**: The route allows the import of a file with `.csv` format containing the same information needed to create a transaction `title`, `value`, `type`, `category`.

# <b> 🚀 Testing the API (Back-end) </b>

To test HTTP requests (GET, POST, PUT, DELETE) with API endpoints, I use and used [Insomnia](https://insomnia.rest/) in the project. However, there are other alternatives, such as Postman, if it is a preference.

- [<b> Download Insomnia File</b>](https://gofile.io/d/FT3o0A)

Or if you prefer, this application has a front-end (interface) to test some functionality, follow the link to the repository:

- [<b>GoFinances Web</b>](https://github.com/RodzAlves/gofinances-web)

- There you will have all the steps to run the front-end server.

<br>

[<b>Rodrigo Alves</b>](https://github.com/RodzAlves)
<br>
Made with 💜 by Rodrigo Alves 👋 <br>
<a href="https://www.linkedin.com/in/rodrigo-alves-dev/" alt="LinkedIn" target="blank">

   <p align="left" >
  <a href="mailto:rodrigoalvesbrasileiro@gmail.com" alt="Gmail">
  <img src="https://img.shields.io/badge/-GMAIL-red?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:rodrigoalvesbrasileiro@gmail.com"/></a>

  <a href="https://www.linkedin.com/in/rodrigo-alves-dev/" alt="Linkedin">
  <img src="https://img.shields.io/badge/-Linkedin-0e76a8?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/iuricode" /></a>

</p>
  </a>
