import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;

position: absolute;
width: 1240px;
height: 48px;
left: 100px;
top: 43px;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavMenu = styled.div`
position: absolute;
width: 1240px;
height: 48px;
left: 100px;
top: 43px;
`;


export const NavLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
width: 57px;
height: 25px;
font-family: 'Red Rose';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
/* identical to box height */


/* text black */

color: #434343;
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;




export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`

position: absolute;
width: 117px;
height: 20px;
left: 27px;
top: 15px;

font-family: 'Red Rose';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
/* identical to box height */
background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
border-radius: 10px;

/* white */

color: #FFFFFF;



cursor: pointer;
text-decoration: none;

/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
