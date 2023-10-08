import React from "react";

function Detail({ selected, closeDetail }) {
return (
	<section className="detail">
	<div className="content">
		<h2>Drama</h2>
		<span>2023</span>
		<p className="rating">Rating: 7.2/10</p>

		<div className="about">
		<img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYuyq0W_1zElYlaeH7wGNZ_gIqRhToQuuMVzTQKQ02ZEwqhIwD' alt="" />
			
<p>Rocky Aur Rani Ki Prem Kahani</p>

		</div>
		<button className="close" onClick={closeDetail}>
		Close
		</button>
	</div>
	</section>
);
}

export default Detail;
