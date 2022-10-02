import React, {FunctionComponent   , useContext} from 'react';

import styles from './gridFrame.module.scss'
import {
	FullscreenOutlined,
	CopyOutlined,
	DeleteOutlined,
	RotateRightOutlined,
	ClearOutlined,  HighlightOutlined
} from "@ant-design/icons";
import {Button} from "antd";
import {useOpen} from "../../hooks/use-open";
import classNames from "classnames";
import {Grid} from "../grid/grid";
import {appContext} from "../../context/context";
import {sizeContext} from "../../context/sizeContext";
import {makeGrid} from "../../App";
import ERASER from './eraser.svg'


export const GridFrame:FunctionComponent<any> = ({  defaultContext}) => {
		const {isOpen:fullScreen , onToggle:fullToggle } = useOpen();
		const {isOpen:rotate , onToggle:onRotate } = useOpen();
		const {isOpen:invertColor , onToggle:OnInvertColor } = useOpen();
	const context = useContext(appContext);
	const sizes = useContext(sizeContext);
	if(!context||!sizes){
		return <> </>
	}
	 const {xState ,yState  } =sizes;
	const HandleCopy=()=>{
		const copyText = document.getElementById("text") as HTMLInputElement;
		window.navigator.clipboard.writeText( copyText.innerText)
	}
	const { setPoints} = context;
	return <div className={  classNames( styles.gridFrame ,{[styles.full]:fullScreen} ,{[styles.rotate]:rotate} )}>
 	<div className={classNames( styles.controls  ) }>
		<Button onClick={fullToggle} icon={		<FullscreenOutlined />}  />
		<Button onClick={onRotate} icon={		<RotateRightOutlined />}  />
		<Button onClick={HandleCopy} icon={	<CopyOutlined />}  />
		<Button onClick={()=>setPoints( makeGrid(xState ,yState ))} icon={	<DeleteOutlined /> }  />
		<Button onClick={OnInvertColor} icon={invertColor? <img className={styles.eraser} src={ERASER} alt=""/>: <HighlightOutlined />}  />
	</div>
		<Grid invertColor={invertColor} fullScreen={fullScreen}/>
	</div>
};
 