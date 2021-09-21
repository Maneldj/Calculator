import NumberButton from "./NumberButton";

function Listnumber(props) {
    
    return (
        <div>
            <NumberButton name="0" clickFunction={props.clickHandler}/>
            <NumberButton name="1" clickFunction={props.clickHandler}/>
            <NumberButton name="2" clickFunction={props.clickHandler}/>
            <NumberButton name="3" clickFunction={props.clickHandler}/>
            <NumberButton name="4" clickFunction={props.clickHandler}/>
            <NumberButton name="5" clickFunction={props.clickHandler}/>
            <NumberButton name="6" clickFunction={props.clickHandler}/>
            <NumberButton name="7" clickFunction={props.clickHandler}/>
            <NumberButton name="8" clickFunction={props.clickHandler}/>
            <NumberButton name="9" clickFunction={props.clickHandler}/>
            <NumberButton name="." clickFunction={props.clickHandler}/>
        </div>
    );
}

export default Listnumber;