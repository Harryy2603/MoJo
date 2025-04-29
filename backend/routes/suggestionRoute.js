import express from "express"
import { generateSuggestions } from "../controllers/suggestionController.js"

const suggestionRouter = express.Router()

suggestionRouter.post("/suggestions" , generateSuggestions);

export default suggestionRouter;