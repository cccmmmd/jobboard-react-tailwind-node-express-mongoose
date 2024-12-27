import JobModel from "../models/job.js";

export const createJob = async (request, response) => {
    const job = new JobModel(request.body);
    try {
        await job.save();
        response.send(job);
    } catch (error) {
        response.status(500).send(error);
    }
};

export const getJobs = async (request, response) => {
    try {
        const limit = request.query.limit || 0;
        const jobs = await JobModel.find({}).limit(limit);
        response.send(jobs);
    } catch (error) {
        response.status(500).send({ error });
    }
};

export const getJobById = async (request, response) => {
    try {
        const job = await JobModel.findOne({ _id: request.params.id });
        response.send(job);
    } catch (error) {
        response.status(500).send({ error });
    }
};

export const updateJob = async (request, response) => {
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
};

export const deleteJob = async (request, response) => {
    try {
        const job = await JobModel.findByIdAndDelete(request.params.id);
        if (!job) {
            return response.status(404).send("Job wasn't found");
        }
        response.status(204).send();
    } catch (error) {
        response.status(500).send({ error });
    }
};