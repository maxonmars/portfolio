import React, {useState} from 'react';
import style from "./superInput.module.css";

type PropsType = {
	title: string
	inputType?: string
};

export const SuperInput:React.FC < PropsType > = ({title, inputType = 'text'}) => {
	let [field, setField] = useState('')
	return (
		<div className={`${style.inputContainer} ${field && style.field}`}>
			<input type={inputType} onChange={(e)=>setField(e.target.value)}/>
			<label>{title}</label>
		</div>
	);
};