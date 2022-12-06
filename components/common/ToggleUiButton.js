import styles from "@/styles/common/ToggleUiButton.module.css";
import Link from "next/link";

const ToggleUiButton = ({ text, dark, url = "/", clickhandler }) => {
  return (
    <div
      className={dark ? styles.ButtonToggleDark : styles.ButtonToggle}
      onClick={clickhandler}
    >
      <span>{clickhandler ? text : <Link href={url}>{text}</Link>}</span>
    </div>
  );
};

export default ToggleUiButton;
