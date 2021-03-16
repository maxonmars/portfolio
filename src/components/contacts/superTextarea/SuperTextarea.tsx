import React, {useState} from 'react';
import style from "./superTextarea.module.css";

type PropsType = {
	title: string
};

export const SuperTextarea: React.FC < PropsType > = ({title}) => {
	let [field, setField] = useState('')
	return (
		<div className={`${style.inputContainer} ${field && style.field}`}>
			<textarea onChange={(e)=>setField(e.target.value)}/>
			<label>{title}</label>
		</div>
	);
};