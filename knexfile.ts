import path from "path";

module.exports = {
  client: "",
  connection: {
    host: "",
    port: 0,
    user: "",
    password: "",
    database: "",
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "src", "database", "seeds"),
  },
  useNullAsDefault: true,
};
