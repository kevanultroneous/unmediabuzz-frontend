import styles from "@/styles/common/ToggleUiButton.module.css"

const ToggleUiButton = ({text,dark}) =>{
    return (
        <div className={dark ? styles.ButtonToggleDark  : styles.ButtonToggle}>
            {text}
        </div>
    )
}

export default ToggleUiButton