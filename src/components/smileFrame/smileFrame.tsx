import React, {useContext, useState} from 'react';

import styles from './smileFrame.module.scss'
import {SmileGrid} from "../smileGrid/smileGrid";
import classNames from "classnames";
import {Button, Select} from "antd";
import {FullscreenOutlined, CopyOutlined,   MinusSquareOutlined} from "@ant-design/icons";
import {useOpen} from "../../hooks/use-open";
import {Option} from "antd/es/mentions/index";

const icons = [
'️❤',
'🧡',
'💛',
'💚',
'💙',
'💜',
'😂',
'👌',
'😀',
'😇',
'😈',
'👿',
'🤢',
'🤤',
'😴',
'🙄',
'😶',
'🤭',
'🫢',
'🤫',
'😡',
'😠',
'😤',
'😭',
'😢',
'☹',
'😣',
'😫',
'😖',
'😔',
'😞',
'😒',
'🤓',
]


export const SmileFrame = () => {
	const {isOpen:isHide , onToggle:toggleHide} =useOpen();
	const [bg , setBg]=useState(icons[1]);
	const [front , setFront]=useState(icons[4]);

	const handleFront = (value: string) => {
		setFront(value)
	};
	const handleBg = (value: string) => {
		setBg(value)
	};
	return <div   className={classNames(styles.smileFrame , {[styles.hide]:isHide}) }>

		<div className={classNames( styles.controls  ) }>
			<Select defaultValue={icons[1]}   style={{ width: 60 }} onChange={handleBg}>
				{icons.map((icon, i)=><Select.Option key={i+"o"} value={icon}>{icon}</Select.Option>)}
			</Select>
			<Select defaultValue={icons[4]}   style={{ width: 60 }} onChange={handleFront}>
				{icons.map((icon, i)=><Select.Option key={i+"o"} value={icon}>{icon}</Select.Option>)}
			</Select>

			<Button  className={styles.btn} onClick={toggleHide} icon={<MinusSquareOutlined />}  />
		</div>
		<div className={styles.gridWrap}>
			<SmileGrid bg={bg} front={front} />
		</div>

	</div>
};
 