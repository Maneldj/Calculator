import OperatorButton from "./OperatorButton.js";

function ListOperator(props) {
    
    return (
        <div>
            <OperatorButton name="AC" clickFunction={props.clickHandler}/>
            <OperatorButton name="+/-" clickFunction={props.clickHandler}/>
            <OperatorButton name="÷" clickFunction={props.clickHandler}/>
            <OperatorButton name="x" clickFunction={props.clickHandler}/>
            <OperatorButton name="-" clickFunction={props.clickHandler}/>
            <OperatorButton name="+" clickFunction={props.clickHandler}/>
            <OperatorButton name="=" clickFunction={props.clickHandler}/>
        </div>
    );
}

export default ListOperator;