import style from "./style.module.css";

const Input = ({
    placeHolder,
    text
}) => {

    return (
        <div className={style.wrap_input} >
            <input required />
            <span data-placeholder={placeHolder} />
        </div>
    )



}

export default Input