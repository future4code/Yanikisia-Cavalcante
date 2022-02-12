import { app } from "./app";
import { createUsers } from "./endpoints/createUsers";
import {getAllUsers} from "./endpoints/getAllUsers"
import {createProducts} from "./endpoints/createProducts"
import { getAllProducts } from "./endpoints/getAllProducts";
import { shoppingRegister } from "./endpoints/shoppingRegister";
import { purchaseUserRegister } from "./endpoints/purchasesUserRegister";

app.post("/users",createUsers);
app.post("/products",createProducts);
app.post("/purchases",shoppingRegister);
app.get("/users",getAllUsers);
app.get("/users/:user_id/purchases", purchaseUserRegister);
app.get("/products",getAllProducts);
