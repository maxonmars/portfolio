import React from 'react';
import style from './aboutMe.module.scss'
import {SuperButton} from "../../common/components/superButton/SuperButton";

type PropsType = {};

export const AboutMe: React.FC<PropsType> = ({}) => {
	return (
		<div className={style.aboutMe}>
			<div className={style.container}>
				<h2>Привет, я Максим Куприянчук!</h2>
				<div className={style.contentWrapper}>
					<div className={style.aboutText}>
						<h3>Несколько слов обо мне</h3>
						<p>Ответственный и мотивированный Front-end разработчик с опытом создания SPA с использованием
							стека React, Redux, TypeScript.</p>
						<p>В свободное время решаю задачи на Codewars. Готов рассмотреть ваши предложения по проектной
							либо полной занятости, онлайн либо оффлайн.</p>
						<div className={style.btnWrapper}>
							<SuperButton title={'скачать резюме'} color={'black'}/>
						</div>
					</div>
					<div className={style.photo}/>
				</div>
			</div>
		</div>
	);
};