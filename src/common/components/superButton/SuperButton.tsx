import React from 'react';
import style from './superButton.module.scss'

type PropsType = {
	title: string
	color: 'white' | 'black'
	onSubmit?: ()=> void
};

export const SuperButton: React.FC<PropsType> = ({title, color}) => {
	const onClickHandler = () => {}
	return (
		<>
			<button className={`${style.btn} ${style[color]}`} onClick={onClickHandler}>{title}</button>
		</>
	);
};