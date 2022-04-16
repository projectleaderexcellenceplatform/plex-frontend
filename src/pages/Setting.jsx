import React from "react";
import avtar2 from "../assets/images/avtar2.svg";

// IMPORT
import Layout from "../layout";
import languageIcon from "../assets/images/languageIcon.svg";
import darkIcon from "../assets/images/darkIcon.svg";
import question from "../assets/images/question.svg";
import boxes from "../assets/images/boxes.svg";
import blueArrow from "../assets/images/icons/blueArrow.svg";

const Setting = () => {
	return (
		<Layout>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="setting-container bg-white radius w-100 p-4">
							<div className="row">
								<div className="col-6">
									<div className=" d-flex align-items-center justify-content-between w-100">
										<div className="d-flex align-items-center">
											<img src={avtar2} alt="" />
											<div className="ms-2">
												<p className="f14 color1 mb-0">Welcome, Laura</p>
												<h5 className="color1 fw800">O-PP3-O-PP301</h5>
											</div>
										</div>
										<div>
											<button className="bg-color3 text-white border-0 px-4 py-3 rounded-10 fw600">
												Log Out
											</button>
										</div>
									</div>

									<p className="mt-5 f18 fw300 color1">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Vestibulum risus mi, volutpat eget tincidunt consequat,
										fringilla et lectus. Quisque congue velit sed augue
										facilisis blandit sit amet sed est.
									</p>

									<br />
									<br />
									<br />
									<br />
									<br />

									<div>
										<p className="border-bottom pb-1 border-1 color1">
											App setting
										</p>

										<div className="d-flex align-items-center justify-content-between mt-5">
											<div className="color1">
												<h5 className="mb-0 fw700">App version: 1.1.0</h5>
												<p className="mb-0 f14">
													You are using the latest version
												</p>
											</div>
											<button className="px-4 py-3 rounded-10 border-0 bg-color1 text-white">
												Check
											</button>
										</div>
										<div className="d-flex align-items-center justify-content-between mt-5">
											<div className="d-flex align-items-center color1">
												<img src={languageIcon} alt="" />
												<h5 className="mb-0 ms-2 fw700">Language</h5>
											</div>
											<select
												name=""
												id=""
												className="px-2 py-3 bg-color1 rounded-10 text-white"
											>
												<option value="English">English</option>
											</select>
										</div>
										<div className="d-flex align-items-center justify-content-between mt-5">
											<div className="d-flex align-items-center color1">
												<img src={darkIcon} alt="" />
												<div className="ms-2">
													<h5 className="mb-0 fw700">App appearances</h5>
													<p className="mb-0 f14">Follow system</p>
												</div>
											</div>
											<select
												name=""
												id=""
												className="px-2 py-3 bg-color1 rounded-10 text-white"
											>
												<option value="English">English</option>
											</select>
										</div>
									</div>

									<div className="d-flex align-items-center justify-content-between mt-5 bg-color4 rounded-10 py-3 px-3">
										<div>
											<h5 className="mb-0 fw700">Get help</h5>
											<p className="mb-0">
												Troubleshooting, contact support, etc.
											</p>
										</div>
										<button className="rounded-10 border-0 bg-transparent color1">
											<img src={blueArrow} alt="" />
										</button>
									</div>
								</div>
								<div className="col-6">
									<div className="setting-col-right bg-color4 p-4 radius">
										<div className="d-flex flex-column radius justify-content-center align-items-center border-blue bg-white py-4">
											<img src={question} alt="" />
											<h4 className="mt-3 fw700">Have a question?</h4>
											<p>We might have the answer in our Help Center!</p>
											<br />
											<button className="bg-color1 px-4 py-3 text-white rounded-10 border-0 fw600">
												Browse guides
											</button>
										</div>

										<p className="f14 mt-5 mb-4">General info</p>

										<div className="d-flex justify-content-between">
											<h5 className="mb-0 fw700">Privacy policy</h5>
											<button className="bg-transparent border-0">
												<img src={blueArrow} alt="" />
											</button>
										</div>
										<div className="d-flex justify-content-between mt-4">
											<h5 className="mb-0 fw700">Privacy policy</h5>
											<button className="bg-transparent border-0">
												<img src={blueArrow} alt="" />
											</button>
										</div>

										<br />
										<br />
										<br />

										<p className="f14 mt-5 mb-3">Code</p>

										<div className="d-flex justify-content-between">
											<div>
												<h5 className="mb-0 fw700">Github</h5>
												<p className="mb-0 f14 w-75">
													You can fork a repository to create a copy of the
													repository and make changes
												</p>
											</div>
											<div>
												<img src={boxes} alt="" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Setting;
