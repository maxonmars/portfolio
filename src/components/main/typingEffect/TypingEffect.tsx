import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import style from './typingEffect.module.scss'

export const ReactTypingEffectDemo = () => {
	return (
		<>
			<ReactTypingEffect className={style.text}
				text={["Максим", "Front-end разработчик"]}
							   staticText={'Я'}
				speed={50}
				eraseDelay={3000}
				eraseSpeed={50}
				typingDelay={500}
			/>
		</>
	);
};