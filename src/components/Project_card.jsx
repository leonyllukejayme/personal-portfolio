import React from 'react';
import project1 from '../images/tindog.jpg'

const Project_card = ({
	id,
	projImg,
	title,
	description,
	sourceCodeURL,
	demoURL,
}) => {
	return (
		<>
			{/* <div className="card" style={{ width: '18rem' }}>
				<img src={projImg} className="card-img-top" alt={title} />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<div className="d-flex gap-3">
                    <a href={sourceCodeURL} className="btn btn-primary">
						Source Code
					</a>
					<a href={demoURL} className="btn btn-secondary">
						Demo
					</a>
                    </div>
				</div>
			</div> */}
			<div className="card" style={{ width: '25rem' }}>
				<img src={project1} className="card-img-top" alt={title} />
				<div className="card-body">
					<h5 className="card-title">TinDog Website</h5>
					<p className="card-text">A dynamic web application crafted using HTML, CSS, and Bootstrap. It seamlessly combines elegant design with responsive functionality to create an engaging platform for dog lovers to connect and explore canine companionship</p>
					<div className="d-flex gap-3">
                    <a href={sourceCodeURL} className="btn btn-primary">
						Source Code
					</a>
					<a href={demoURL} className="btn btn-secondary">
						Demo
					</a>
                    </div>
				</div>
			</div>
		</>
	);
};

export default Project_card;
