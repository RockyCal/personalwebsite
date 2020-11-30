import React from 'react'
import styled from 'styled-components'
import RaquelPhoto from './assets/Raquel-9648.png'

const SubjectPhoto = styled.img`
	height: 445px;
	width: 300px;
`;

const Photo = (props) => {
	return (
		<div>
			<SubjectPhoto src={RaquelPhoto} />
		</div>
		)
}

export default Photo