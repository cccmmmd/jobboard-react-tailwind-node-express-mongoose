import React, { useState } from "react";
import { useParams, useLoaderData,  useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const EditJob = ({updateJob}) => {
	const job = useLoaderData();
	const [formData, setformData] = useState({
		id: job.id,
		title: job.title,
		type: job.title,
		location: job.location,
		description: job.description,
		salary: job.salary,
		c_name: job.c_name,
		c_description: job.c_description,
		c_contactEmail: job.c_contactEmail,
		c_contactPhone: job.c_contactPhone,
	});
	const navigate = useNavigate();
	const submitForm = (e) => {
		e.preventDefault();
        updateJob(formData);
        toast.success('工作更新成功！');
		navigate("/jobs");
	};
	const handleChange = (e) => {
		setformData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	return (
		<section className="bg-teal-50">
			<div className="container m-auto max-w-2xl py-24">
				<div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
					<form onSubmit={submitForm}>
						<h2 className="text-3xl text-center font-semibold mb-6">
							編輯工作
						</h2>

						<div className="mb-4">
							<label
								htmlFor="type"
								className="block text-gray-700 font-bold mb-2"
							>
								工作類型
							</label>
							<select
								id="type"
								name="type"
								className="border rounded w-full py-2 px-3"
								required
								onChange={handleChange}
								value={formData.type}
							>
								<option value="Full-Time">Full-Time</option>
								<option value="Part-Time">Part-Time</option>
								<option value="Remote">Remote</option>
								<option value="Internship">Internship</option>
							</select>
						</div>

						<div className="mb-4">
							<label className="block text-gray-700 font-bold mb-2">
								職務名稱
							</label>
							<input
								type="text"
								id="title"
								name="title"
								className="border rounded w-full py-2 px-3 mb-2"
								placeholder="eg. Beautiful Apartment In Miami"
								required
								value={formData.title}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="description"
								className="block text-gray-700 font-bold mb-2"
							>
								工作描述
							</label>
							<textarea
								id="description"
								name="description"
								className="border rounded w-full py-2 px-3"
								rows="4"
								placeholder="Add any job duties, expectations, requirements, etc"
								onChange={handleChange}
								value={formData.description}
							></textarea>
						</div>

						<div className="mb-4">
							<label
								htmlFor="type"
								className="block text-gray-700 font-bold mb-2"
							>
								薪水
							</label>
							<select
								id="salary"
								name="salary"
								className="border rounded w-full py-2 px-3"
								required
								onChange={handleChange}
								value={formData.salary}
							>
								<option value="NT$20,000">NT$20,000</option>
								<option value="NT$25,000">NT$25,000</option>
								<option value="NT$30,000">NT$30,000</option>
								<option value="NT$35,000">NT$35,000</option>
								<option value="NT$40,000">NT$40,000</option>
								<option value="NT$45,000">NT$45,000</option>
								<option value="NT$50,000">NT$50,000</option>
								<option value="NT$55,000">NT$55,000</option>
								<option value="NT$60,000">NT$60,000</option>
								<option value="NT$65,000">NT$65,000</option>
								<option value="NT$70,000">NT$70,000</option>
								<option value="NT$75,000">NT$75,000</option>
								<option value="NT$80,000">NT$80,000</option>
								<option value="NT$85,000">NT$85,000</option>
								<option value="NT$90,000">NT$90,000</option>
								<option value="NT$95,000">NT$95,000</option>
								<option value="NT$100,000">NT$100,000</option>
								<option value="NT$105,000">NT$105,000</option>
								<option value="NT$110,000">NT$110,000</option>
								<option value="NT$115,000">NT$115,000</option>
							</select>
						</div>

						<div className="mb-4">
							<label className="block text-gray-700 font-bold mb-2">
								地點
							</label>
							<input
								type="text"
								id="location"
								name="location"
								className="border rounded w-full py-2 px-3 mb-2"
								placeholder="Company Location"
								required
								onChange={handleChange}
								value={formData.location}
							/>
						</div>

						<h3 className="text-2xl mb-5">公司資訊</h3>

						<div className="mb-4">
							<label
								htmlFor="company"
								className="block text-gray-700 font-bold mb-2"
							>
								公司名稱
							</label>
							<input
								type="text"
								id="company"
								name="c_name"
								className="border rounded w-full py-2 px-3"
								placeholder="Company Name"
								onChange={handleChange}
								value={formData.c_name}
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="company_description"
								className="block text-gray-700 font-bold mb-2"
							>
								公司描述
							</label>
							<textarea
								id="company_description"
								name="c_description"
								className="border rounded w-full py-2 px-3"
								rows="4"
								placeholder="What does your company do?"
								onChange={handleChange}
								value={formData.c_description}
							></textarea>
						</div>

						<div className="mb-4">
							<label
								htmlFor="contact_email"
								className="block text-gray-700 font-bold mb-2"
							>
								聯繫 Email
							</label>
							<input
								type="email"
								id="contact_email"
								name="c_contactEmail"
								className="border rounded w-full py-2 px-3"
								placeholder="Email address for applicants"
								required
								onChange={handleChange}
								value={formData.c_contactEmail}
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="contact_phone"
								className="block text-gray-700 font-bold mb-2"
							>
								聯絡電話
							</label>
							<input
								type="tel"
								id="contact_phone"
								name="c_contactPhone"
								className="border rounded w-full py-2 px-3"
								placeholder="Optional phone for applicants"
								onChange={handleChange}
								value={formData.c_contactPhone}
							/>
						</div>

						<div>
							<button
								className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
								type="submit"
							>
								儲存
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default EditJob;
