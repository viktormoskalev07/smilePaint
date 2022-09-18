import React from "react";
import {GridFrame} from "../gridFrame/gridFrame";
import styles from './layout.module.scss'
import {SmileFrame} from "../smileFrame/smileFrame";
import {SizeControl} from "../sizeControl/sizeControl";

export const LayoutBlock: React.FC<any> = ({defaultContext}) => (
 		<section className={styles.layout}>
 			<h1>  Smile painter</h1>

			<div className={styles.mainGrid}>
				<GridFrame defaultContext={defaultContext}/>
				<SizeControl/>
			<SmileFrame/>
			</div>

 	</section>
);