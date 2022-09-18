import React, {useContext} from 'react';

import styles from './sizeControl.module.scss'
import {Input} from "antd";
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
	const widthHandler = (e:any)=>{
		setX(e.target.value)
		setPoints(	makeGrid(e.target.value,yState));
	};
	const heightHandler = (e:any)=>{
		setY(e.target.value)
		setPoints(	makeGrid(xState, e.target.value ));
	};
	const sizeHandler = (e:any)=>{
		setSize(e.target.value)
	};
	return <div className={styles.sizeControl}>
		<Input addonBefore="width" onChange={widthHandler}  type={'number'}   defaultValue={xState} />
		<Input addonBefore="height"  onChange={heightHandler} type={'number'}   defaultValue={yState} />
		<Input addonBefore="point size" onChange={sizeHandler}  type={'number'} defaultValue={sizeState} />
	</div>
};
 