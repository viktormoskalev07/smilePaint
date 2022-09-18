import React  from "react";


interface  AppContextInterface{
 	points:boolean[],
	setPoints:React.Dispatch<any>
}



export const appContext = React.createContext<AppContextInterface|null>( null);