import express from 'express'
import {app} from "./services/app"
import {registerUser} from "./endpoints/registerUser"

app.post("/users",registerUser)