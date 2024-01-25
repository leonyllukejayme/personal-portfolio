import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Projects_sect from '../components/Projects_sect';
import Contact_sect from '../components/Contact_sect';

function Projects() {
	return (
		<>
			<Navbar />
			<Projects_sect />
			<Contact_sect />
			<Footer />
		</>
	);
}

export default Projects;
