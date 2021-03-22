import React from 'react';
import style from './links.module.scss'
import {v1} from 'uuid'

type PropsType = {};

const links = [
	{id: v1(), linkTo: 'main', title: 'главная'},
	{id: v1(), linkTo: 'about me', title: 'обо мне'},
	{id: v1(), linkTo: 'skills', title: 'навыки'},
	{id: v1(), linkTo: 'projects', title: 'проекты'},
	{id: v1(), linkTo: 'contacts', title: 'контакты'},
]

export const Links: React.FC < PropsType > = ({}) => {
	return (
		<>
			{links.map(({id, linkTo, title})=>
				<li className={style.link} key={id}><a href={'/#'}>{title}</a></li>
			)}
		</>
	);
};