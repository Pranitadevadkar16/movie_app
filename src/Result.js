import React from "react";

function Result({ result, openDetail }) {
return (
    <>
	<div className="result" onClick=
		{() => openDetail(result.imdbID)}>
	<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYuyq0W_1zElYlaeH7wGNZ_gIqRhToQuuMVzTQKQ02ZEwqhIwD" />
	<h3>Rocky Aur Rani Ki Prem Kahani
</h3>
	</div>
    <div className="result" onClick=
    {() => openDetail(result.imdbID)}>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDMgFpw5pbQOgRB6BHT5oKr5zwF5Iffnhq548ub87DYQ_0nV3" />
<h3>Satyaprem Ki Katha
</h3>
</div>
   </> 
);
}

export default Result;
