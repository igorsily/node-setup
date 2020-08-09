import knex from "knex";

const connection = knex({
  client: "",
  connection: {
    host: "",
    port: 0,
    user: "",
    password: "",
    database: "",
  },
  useNullAsDefault: true,
});

export default connection;
