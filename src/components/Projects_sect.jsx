import React, { useState } from 'react';
import Project_card from './Project_card';
import { projectData } from './projectData'

const Projects_sect = () => {
	const [project,setProject] = useState(projectData)
	return (
		<>
			<div className="container">
				<div className="container justify-content-center text-center my-5">
					<h1>Projects</h1>
				</div>
                <hr className="w-50 mx-auto mb-5 text-secondary" />
				<div className="row justify-content-center gap-4">
					{
						project.map(p => {
							return <Project_card id={p.id} projImg={p.projImg}
							pLang={p.pLang} title={p.title} description={p.description} sourceCodeURL={p.sourceCodeURL} demoURL={p.demoURL}  />
						})
					}
				</div>
			</div>
		</>
	);
};

export default Projects_sect;
