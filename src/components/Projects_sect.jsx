import React from 'react';
import Project_card from './Project_card';
import project1 from '../images/tindog.jpg'

const Projects_sect = () => {
	return (
		<>
			<div className="container">
				<div className="container justify-content-center text-center my-5">
					<h1>Projects</h1>
				</div>
                <hr className="w-50 mx-auto mb-5 text-secondary" />
				<div className="row justify-content-center gap-4">
					<Project_card id={1} projImg={project1} title={"TinDog Website"} description={"A dynamic web application crafted using HTML, CSS, and Bootstrap. It seamlessly combines elegant design with responsive functionality to create an engaging platform for dog lovers to connect and explore canine companionship"} />
					<Project_card id={1} projImg={project1} title={"TinDog Website"} description={"A dynamic web application crafted using HTML, CSS, and Bootstrap. It seamlessly combines elegant design with responsive functionality to create an engaging platform for dog lovers to connect and explore canine companionship"} />
					<Project_card id={1} projImg={project1} title={"TinDog Website"} description={"A dynamic web application crafted using HTML, CSS, and Bootstrap. It seamlessly combines elegant design with responsive functionality to create an engaging platform for dog lovers to connect and explore canine companionship"} />
					<Project_card id={1} projImg={project1} title={"TinDog Website"} description={"A dynamic web application crafted using HTML, CSS, and Bootstrap. It seamlessly combines elegant design with responsive functionality to create an engaging platform for dog lovers to connect and explore canine companionship"} />
					<Project_card id={1} projImg={project1} title={"TinDog Website"} description={"A dynamic web application crafted using HTML, CSS, and Bootstrap. It seamlessly combines elegant design with responsive functionality to create an engaging platform for dog lovers to connect and explore canine companionship"} />
					<Project_card id={1} projImg={project1} title={"TinDog Website"} description={"A dynamic web application crafted using HTML, CSS, and Bootstrap. It seamlessly combines elegant design with responsive functionality to create an engaging platform for dog lovers to connect and explore canine companionship"} />
				</div>
			</div>
		</>
	);
};

export default Projects_sect;
