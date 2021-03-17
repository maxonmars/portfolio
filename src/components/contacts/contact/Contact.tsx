import React from 'react';
import style from './contact.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type PropsType = {
	title: string
	iconType: any
	rotate?: any
};

export const Contact:React.FC < PropsType > = ({title, iconType, rotate}) => {
	return (
		<div className={style.contactWrapper}>
			<div className={style.contactIconWrapper}>
				<FontAwesomeIcon icon={iconType} inverse rotation={rotate}/>
			</div>
			<div className={style.contactText}>
				<span>{title}</span>
			</div>
		</div>
	);
};