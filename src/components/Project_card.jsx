import React, { useState } from 'react';

const Project_card = ({
	id,
	projImg,
	title,
	pLang,
	description,
	sourceCodeURL,
	demoURL,
}) => {
	const[isReadMore,setIsReadMore] = useState(true);
	const toggleReadMore = () => {setIsReadMore(!isReadMore)}

	const shortDesc = description.substr(0,150) + '...';
	return (
		<>
			<div className="card" style={{ width: '25rem' }}>
				<img src={projImg} className="card-img-top" alt={title} />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<div className="d-flex gap-2">
					{pLang.map(p => <p class="skl-btn">{p}</p>)}
					</div>
					<p className="card-text">{isReadMore ? shortDesc : description}{
						description.length > 150 && <span className='read-more' onClick={toggleReadMore}>
							{isReadMore ? 'Read More' : ' Show Less'}
						</span>
					}</p>
					<div className="d-flex gap-3">
                    <a href={sourceCodeURL} target='_blank' className="btn btn-primary">
						Source Code
					</a>
					<a href={demoURL} target='_blank' className="btn btn-secondary">
						Demo
					</a>
                    </div>
				</div>
			</div>
		</>
	);
};	

export default Project_card;
