import styled from 'styled-components';

const Container = styled.div`
	max-width: 700px;
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 0 30px rgba(255, 255, 255, 0.9);
	padding: 30px;
	margin: 80px auto;

	h1 {
		font-size: 30px;
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #333;
		justify-content: center;

		svg {
			margin-right: 10px;
		}
	}

	p {
		margin-top: 10px;
 
	}
`;

export default Container;
