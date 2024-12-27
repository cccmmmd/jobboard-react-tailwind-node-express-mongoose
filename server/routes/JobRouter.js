import express from "express";
import *  as JobController from "../controllers/JobController.js";

const router = express.Router();

router.post("/jobs", JobController.createJob);
router.get("/jobs", JobController.getJobs);
router.get("/jobs/:id", JobController.getJobById);
router.patch("/jobs/:id", JobController.updateJob);
router.delete("/jobs/:id", JobController.deleteJob);

export default router;