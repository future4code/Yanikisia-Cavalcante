import { app } from "./app";
import { getAllUsersByType } from "./endpoints/getAllUserByType";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllUsersByName } from "./endpoints/getAllUsersByNAme";
import {getAllUsersByOrder} from "./endpoints/getAllUsersByOrder"
import { getLimitedUsers } from "./endpoints/getLimitedUsers";

app.get("/users", getAllUsers)
app.get("/user",getAllUsersByName)
app.get("/order",getAllUsersByOrder)
app.get("/users/:type", getAllUsersByType)
app.get("/page",getLimitedUsers)