import express from "express";
import JobModel from "../models/job.js";
const router = express.Router();

router.post("/jobs", async (request, response) => {
	const job = new JobModel(request.body);
	try {
		await job.save();
		response.send(job);
	} catch (error) {
		response.status(500).send(error);
	}
});

router.get("/jobs", async (request, response) => {
	try {
		const limit = request.query.limit || 0;
		const jobs = await JobModel.find({}).limit(limit);
		response.send(jobs);
	} catch (error) {
		response.status(500).send({ error });
	}
});

router.get("/jobs/:id", async (request, response) => {
	try {
		const job = await JobModel.findOne({ _id: request.params.id });
		response.send(job);
	} catch (error) {
		response.status(500).send({ error });
	}
});

router.patch("/jobs/:id", async (request, response) => {
	try {
		const job = await JobModel.findByIdAndUpdate(
			request.params.id,
			request.body
		);
		await job.save();
		response.send(job);
	} catch (error) {
		response.status(500).send({ error });
	}
});

router.delete("/jobs/:id", async (request, response) => {
	try {
		const job = await JobModel.findByIdAndDelete(request.params.id);
		if (!job) {
			return response.status(404).send("Job wasn't found");
		}
		response.status(204).send();
	} catch (error) {
		response.status(500).send({ error });
	}
});

export default router;
