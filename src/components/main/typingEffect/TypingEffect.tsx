import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import style from './typingEffect.module.scss'

export const ReactTypingEffectDemo = () => {
	return (
		<>
			<ReactTypingEffect className={style.text}
				text={["Hi There", "I am Max Kupriyanchuk", "A Frontend Developer"]}
				speed={50}
				eraseDelay={200}
				eraseSpeed={250}
				typingDelay={100}
			/>
		</>
	);
};