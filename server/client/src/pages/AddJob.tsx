import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const AddJob = ({addJobFunc}) => {
	const [formData, setformData] = useState({
		title: "",
		type: "Full-Time",
		location: "",
		description: "",
		salary: "$20000",
		c_name: "",
		c_description: "",
		c_contactEmail: "",
		c_contactPhone: "",
	});
	const navigate = useNavigate();
	const submitForm = (e) => {
		e.preventDefault();
		addJobFunc(formData);
        
        toast.success('工作新增成功！');
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
							新增工作
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
							>
								<option value="$20000">NT$20,000</option>
								<option value="$25000">NT$25,000</option>
								<option value="$30000">NT$30,000</option>
								<option value="$35000">NT$35,000</option>
								<option value="$40000">NT$40,000</option>
								<option value="$45000">NT$45,000</option>
								<option value="$50000">NT$50,000</option>
								<option value="$55000">NT$55,000</option>
								<option value="$60000">NT$60,000</option>
								<option value="$65000">NT$65,000</option>
								<option value="$70000">NT$70,000</option>
								<option value="$75000">NT$75,000</option>
								<option value="$80000">NT$80,000</option>
								<option value="$85000">NT$85,000</option>
								<option value="$90000">NT$90,000</option>
								<option value="$95000">NT$95,000</option>
								<option value="$100000">NT$100,000</option>
								<option value="$105000">NT$105,000</option>
								<option value="$110000">NT$110,000</option>
								<option value="$115000">NT$115,000</option>
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

export default AddJob;
