import { User } from "@models/User";
import knex from "knex";

export default class UsersController {
  teste = async () => {
    const user = new User();

    await knex("user").select("*");
  };
}
