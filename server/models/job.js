import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
	{
		id: {
			type: String,
		},
		title: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		salary: {
			type: String,
			required: true,
		},
		c_name: {
			type: String,
		},
		c_description: {
			type: String,
		},
		c_contactEmail: {
			type: String,
			required: true,
		},
		c_contactPhone: {
			type: String,
		},
	},
	{ collection: "Jobboard" }
);

const JobModel = mongoose.model("Job", JobSchema);
export default JobModel;
