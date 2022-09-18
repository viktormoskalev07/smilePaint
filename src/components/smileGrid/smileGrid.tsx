import React, {useRef, useContext} from 'react';

import styles from './smileGrid.module.scss'
import {appContext} from "../../context/context";
import {sizeContext} from "../../context/sizeContext";

export const SmileGrid = () => {
	const context = useContext(appContext);
	const sizes = useContext(sizeContext);
	if(!context||!sizes){
		return <> </>
	}
	const {sizeState,xState}=sizes;
	const {points} = context;
	return <div style={{width:xState*sizeState}} id={'text'} className={styles.smileGrid}>
		{points.map((point , i)=>{
			if(i===0){
				return <React.Fragment key={i}></React.Fragment>
			}
			const Br = ()=>{
			return i%xState===0 ?  <br/> : <></>
			} ;

			return<React.Fragment key={i}>
				<span  data-index={i} className={styles.item}
							style={{background:point?'#eeeeee':'white' ,width:sizeState/1 }}
						 > {point?"❤":"💙" }   </span> <Br/>
			 </React.Fragment>


		})}
	</div>
};
 