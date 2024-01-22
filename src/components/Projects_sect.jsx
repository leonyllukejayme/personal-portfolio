import React from 'react';
import Project_card from './Project_card';

const Projects_sect = () => {
	return (
		<>
			<div className="container">
				<div className="container justify-content-center text-center my-5">
					<h1>Projects</h1>
				</div>
				<div className="row justify-content-center gap-4">
					<Project_card />
					<Project_card />
					<Project_card />
					<Project_card />
					<Project_card />
					<Project_card />
				</div>
			</div>
		</>
	);
};

export default Projects_sect;
