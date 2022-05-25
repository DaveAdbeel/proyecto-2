const Button = ({text, isClicked, handleClick}) => {
    return(
        <button className={isClicked ? 'button-click' : 'button-restart'} 
        onClick={handleClick}>
             {text}
        </button>
    )
}

export default  Button;