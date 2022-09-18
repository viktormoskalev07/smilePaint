import React, {FunctionComponent   , useContext} from 'react';

import styles from './gridFrame.module.scss'
import {FullscreenOutlined, CopyOutlined, DeleteOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {useOpen} from "../../hooks/use-open";
import classNames from "classnames";
import {Grid} from "../grid/grid";
import {appContext} from "../../context/context";


export const GridFrame:FunctionComponent<any> = ({  defaultContext}) => {
		const {isOpen:fullScreen , onToggle:fullToggle } = useOpen();
	const context = useContext(appContext);

	if(!context){
		return <> </>
	}
	const HandleCopy=()=>{
		const copyText = document.getElementById("text") as HTMLInputElement;
		console.log(copyText.innerText)
		window.navigator.clipboard.writeText( copyText.innerText)
	}
	const { setPoints} = context;
	return <div className={  classNames( styles.gridFrame ,{[styles.full]:fullScreen} )}>

		<Grid fullScreen={fullScreen}/>
 	<div className={classNames( styles.controls  ) }>
		<Button onClick={fullToggle} icon={		<FullscreenOutlined />}  />
		<Button onClick={HandleCopy} icon={	<CopyOutlined />}  />
		<Button onClick={()=>setPoints(defaultContext)} icon={	<DeleteOutlined />}  />
	</div>

	</div>
};
 