import React from "react";
import lineSort from "../assets/images/icons/lineSort.svg";
import nonActiveLineSort from "../assets/images/icons/nonActiveLineSort.svg";
import sort from "../assets/images/icons/sort.svg";
import sort2 from "../assets/images/icons/sort2.svg";

const Filter = ({
	activeBtn,
	setActiveBtn,
	activeSort,
	setActiveSort,
	studentFilter,
	handleChange,
	filterOptions
}) => {
	const filter_buttons = filterOptions;

	return (
		<div className="filter-container d-flex justify-content-between align-items-end pb-2">
			<div className="d-flex">
				<div>
					<label htmlFor="Sort by">Sort by</label>
					<br />
					<select onChange={handleChange} className="mt-1">
						<option selected disabled>
							Order by ASC
						</option>
						<option value="1">Likes (high-low)</option>
						<option value="2">Name (a-z)</option>
						<option value="3">Created (new-old)</option>
						<option value="4">Updated (new-old)</option>
					</select>
				</div>
				<div className="ms-3">
					<label htmlFor="Filter by">Filter by</label>
					<div className="d-flex mt-1">
						{filter_buttons.map((item, i) => {
							return (
								<button
									onClick={() => setActiveBtn(i)}
									key={i}
									className={`${activeBtn === i && "bg-color1 text-white"} ${
										i !== 0 && "ms-3"
									} f14`}
								>
									{item}
								</button>
							);
						})}
					</div>
				</div>
			</div>

			{!studentFilter && (
				<div className="d-flex">
					{(activeSort === 0 && (
						<img
							onClick={() => setActiveSort(0)}
							className="me-2 pointer"
							src={sort}
							alt=""
						/>
					)) || (
						<img
							onClick={() => setActiveSort(0)}
							className="me-2 pointer"
							src={sort2}
							alt=""
						/>
					)}

					{(activeSort === 1 && (
						<img
							className="ms-2 pointer"
							onClick={() => setActiveSort(1)}
							src={lineSort}
							alt=""
						/>
					)) || (
						<img
							className="ms-2 pointer"
							onClick={() => setActiveSort(1)}
							src={nonActiveLineSort}
							alt=""
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default Filter;
