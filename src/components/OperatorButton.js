function OperatorButton(props) {
    return (
            <div>
                <div onClick={props.clickFunction}>{props.name}</div>
            </div>
    );
}

export default OperatorButton;