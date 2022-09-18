import React, {useState} from "react";




interface  SizeContextInterface{
	xState:number,
	yState:number,
	sizeState:number
	setX:React.Dispatch<any>,
	setY:React.Dispatch<any>,
	setSize:React.Dispatch<any>,
}



export const sizeContext = React.createContext<SizeContextInterface|null>( null);