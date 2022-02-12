import { app } from "./app";
import { createUsers } from "./endpoints/createUsers";
import {getAllUsers} from "./endpoints/getAllUsers"
import {createProducts} from "./endpoints/createProducts"
import { getAllProducts } from "./endpoints/getAllProducts";
import { shoppingRegister } from "./endpoints/shoppingRegister";

app.post("/users",createUsers);
app.post("/products",createProducts);
app.post("/purchases",shoppingRegister);
app.get("/users",getAllUsers);
app.get("/products",getAllProducts);
