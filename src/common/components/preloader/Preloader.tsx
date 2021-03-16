import React, {useEffect, useState} from 'react';
import style from './preloader.module.scss'

type PropsType = {};

export const Preloader: React.FC < PropsType > = ({children}) => {
	const [load, setLoad] = useState(false)

	const on = () => setLoad(true)

	useEffect(() => {
		window.addEventListener('load', on)
		return ()=> {
			window.removeEventListener('load', on)
		}
	}, [])

	return (
		<>
			<div className={`${style.loaderContainer} ${load && style.load}`}>
				<div className={style.wrapper}>
					<div className={`${style.ring} ${style.ring_1}`}/>
					<div className={`${style.ring} ${style.ring_2}`}/>
					<div className={`${style.ring} ${style.ring_3}`}/>
					<div className={`${style.ring} ${style.ring_4}`}/>
					<div className={`${style.ring} ${style.ring_5}`}/>
					<div className={`${style.ring} ${style.ring_6}`}/>
					<div className={`${style.ring} ${style.ring_7}`}/>
					<div className={`${style.ring} ${style.ring_8}`}/>
					<div className={`${style.ring} ${style.ring_9}`}/>
				</div>
			</div>
			{children}
		</>
	);
};