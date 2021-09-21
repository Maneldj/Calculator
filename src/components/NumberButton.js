function NumberButton(props) {
    return (
            <div>
                <div onClick={props.clickFunction}>{props.name}</div>
            </div>
    );
}

export default NumberButton;