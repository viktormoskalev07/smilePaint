import React, {useRef, useState, FunctionComponent, useContext} from 'react';

import styles from './grid.module.scss'
import classNames from "classnames";
import {appContext} from "../../context/context";
import {sizeContext} from "../../context/sizeContext";

type TProps={
	fullScreen:boolean
}

export const Grid:FunctionComponent<TProps> = (fullScreen) => {
	const moveState=useRef(0)
	const context = useContext(appContext);
	const sizes = useContext(sizeContext);
	if(!context||!sizes){
		return <> </>
	}
	const {points , setPoints} = context;
	const {yState, xState , sizeState} = sizes


	const startHandler=(e:any)=>{

		if(e.button===2){
			moveState.current=2
		}else {
			moveState.current=1
		}
	}
	const stopHandler=()=>{
		moveState.current=0
	}
	const paint = (elem:any  ,color=true )=>{
		const newState = [...points]
		newState[elem.dataset.index] =color;
		setPoints(newState)
	}
	const moveHandler=(e:any)=>{
		if(!moveState.current){
			return
		}
		 paint(e.target ,moveState.current!==2)
	}
	const clickHandler=(e:any)=>{
		paint(e.target,moveState.current!==2)
	}
	const touchHandler = (e:any)=>{
		const x =e.touches[0].pageX;
		const y =e.touches[0].pageY; ;

		const elem:any =document.elementFromPoint(x, y)
		if(elem?.dataset?.index){
			paint(elem)
		}
	}
	const contextHandler =(e:any)=>{
		e.preventDefault()
		paint(e.target , false)
	}


	return <div
		style={{gridTemplateColumns:`repeat(${xState} ,1fr)`  ,width:sizeState*xState }}
		onMouseMove={moveHandler}
							onTouchMove={touchHandler}
							onContextMenu={contextHandler}
							onMouseDown={startHandler}
							onClick={clickHandler}
							onMouseUp={stopHandler}
							onMouseLeave={stopHandler}
							className={ classNames( styles.grid ,{[styles.full]:fullScreen} )}>
		{points.map((point , i)=>{
			if(i===0){
				return <React.Fragment key={i}></React.Fragment>
			}
			return<div data-index={i} className={styles.item} style={{background:point?'black':'white'}} key={i}>   </div>
		})}

	</div>
};