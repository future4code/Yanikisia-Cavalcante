import { app } from "./app";
import { createUsers } from "./endpoints/createUsers";
import {getAllUsers} from "./endpoints/getAllUsers"

app.post("/users",createUsers);
app.get("/users",getAllUsers);
