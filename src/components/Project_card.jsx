import React from 'react';

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
			<div className="card" style={{ width: '25rem' }}>
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
			</div>
		</>
	);
};

export default Project_card;
