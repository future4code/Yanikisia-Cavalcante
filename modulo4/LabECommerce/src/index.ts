import { app } from "./app";
import { createUsers } from "./endpoints/createUsers";

app.post("/users",createUsers);