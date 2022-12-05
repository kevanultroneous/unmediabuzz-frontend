import styles from "@/styles/common/ToggleUiButton.module.css";
import Link from "next/link";

const ToggleUiButton = ({ text, dark, url = "/" }) => {
  return (
    <div className={dark ? styles.ButtonToggleDark : styles.ButtonToggle}>
      <span>
        <Link href={url}>{text}</Link>
      </span>
    </div>
  );
};

export default ToggleUiButton;
