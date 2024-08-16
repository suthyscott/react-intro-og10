

const Button = (props) => {

    const alertMessage = () => {
        alert('Click handled for ' + props.message)
    }
    return (
        <button onClick={e => alertMessage(e)}>{props.message}</button>
    )
}

export default Button