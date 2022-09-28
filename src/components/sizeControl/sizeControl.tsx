import React, {useContext, FunctionComponent} from 'react';

import styles from './sizeControl.module.scss'
import {Input, Slider} from "antd";
import {appContext} from "../../context/context";
import {sizeContext} from "../../context/sizeContext";
import {makeGrid} from "../../App";

export const SizeControl = () => {
	const context = useContext(sizeContext);
	const points = useContext(appContext);
	if(!context||!points){
		return <> </>
	}
	const {     xState,
		yState,
		sizeState,
		setX,
		setY,
		setSize} = context;
	const {setPoints}=points
	const widthHandler = (e:number)=>{
		setX(e)
		setPoints(	makeGrid(e,yState));
	};
	const heightHandler = (e:number)=>{
		setY(e)
		setPoints(	makeGrid(xState, e ));
	};
	const sizeHandler = (e:number)=>{
		setSize(e)
	};
	return <div className={styles.sizeControl}>

	<Range   value={xState} change={widthHandler} label={"Width"}/>
	<Range value={yState} change={heightHandler} label={"Height"}/>
	<Range value={sizeState} change={sizeHandler} label={"point size"}/>


	</div>
};



type TRange ={
	value : number,
	change : (e:number)=>void;
	label:string;
}
const Range:FunctionComponent<TRange>  =({value , change , label})=>{
	return <div>
		label
		<Slider min={5} max={50}   onChange={change} value={value} />
	</div>
}