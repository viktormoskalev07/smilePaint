import React, {useContext} from 'react';

import styles from './smileFrame.module.scss'
import {SmileGrid} from "../smileGrid/smileGrid";
import classNames from "classnames";
import {Button} from "antd";
import {FullscreenOutlined, CopyOutlined, DeleteOutlined} from "@ant-design/icons";
import {appContext} from "../../context/context";
import {sizeContext} from "../../context/sizeContext";

export const SmileFrame = () => {

	return <div   className={styles.smileFrame}>

	<SmileGrid/>
		<div className={classNames( styles.controls  ) }>
			<Button   icon={		<FullscreenOutlined />}  />
			<Button icon={	<CopyOutlined />}  />
			<Button icon={	<DeleteOutlined />}  />
		</div>
	</div>
};
 