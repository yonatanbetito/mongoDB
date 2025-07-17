import express from "express";
import { 
    getAllReports,
    addReport,
    reportsHighThen
    } from "../controllers/reportsControlers.js";

const router = express.Router();

router.get("/", getAllReports);
router.post("/", addReport);
router.get("/:level", reportsHighThen);



export default router;
