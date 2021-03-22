import React, {useState} from 'react';
import {Links} from "../links/Links";
import style from './burgerNav.module.scss'

type PropsType = {};

export const BurgerNav: React.FC < PropsType > = ({}) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)

	const onToggleMenu = () => {
		setMenuIsOpen(!menuIsOpen)
	}
	return (
		<div className={style.burgerNavWrapper}>
			<div className={`${style.burgerBtn} ${menuIsOpen? style.openMenu : null}`} onClick={onToggleMenu}>
				<div className={style.top}/>
				<div className={style.mid}/>
				<div className={style.bottom}/>
			</div>
			<div className={`${style.burgerNav} ${menuIsOpen ? style.show : null}`}>
				<ul><Links/></ul>
			</div>
		</div>
	);
};