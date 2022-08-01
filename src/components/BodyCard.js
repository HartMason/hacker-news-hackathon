import React from "react";

function BodyCard(props) { 
    return (
        <div>
        <div className="CardContainer">

            <div className="TitleAndUrlContainer">
                <h1 className="title">{props.title}</h1>
                <a href={props.url}>({props.url})</a>
            </div>

            <div className="BottomContainer">
                <div>{props.points} points</div>
                <div>|| {props.author} </div>
                <div>|| {props.comments} comments</div>

            </div>
      
         
        </div>
    </div>
       
        

    
    )
}










export default BodyCard ;