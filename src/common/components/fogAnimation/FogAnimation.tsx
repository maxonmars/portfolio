import React from 'react';
import style from './fogAnimation.module.css'

type PropsType = {};

export const FogAnimation: React.FC < PropsType > = ({}) => {
	return (
		<div className={style.fog}>
			<div></div>
		</div>
	);
};