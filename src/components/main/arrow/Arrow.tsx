import React from 'react';
import style from './arrow.module.scss'

type PropsType = {
	title: string
};

export const Arrow: React.FC < PropsType > = ({title}) => {
	return (
		<div className={style.arrowContainer}>
			<div className={style.vertical}/>
			<div className={style.text}>{title}</div>
			<div className={style.arrows}>
				<div className={style.arrow}/>
				<div className={style.arrow}/>
				<div className={style.arrow}/>
			</div>
		</div>
	);
};