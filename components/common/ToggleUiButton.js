import styles from "@/styles/common/ToggleUiButton.module.css";
import Link from "next/link";

const ToggleUiButton = ({ text, dark, url = "/", clickhandler }) => {
  return (
    <div className={styles.LinksWrrap}>
      {clickhandler ? (
        <div
          className={dark ? styles.ButtonToggleDark : styles.ButtonToggle}
          onClick={clickhandler}
        >
          <span>{text}</span>
        </div>
      ) : (
        <Link href={url}>
          <div
            className={dark ? styles.ButtonToggleDark : styles.ButtonToggle}
            onClick={clickhandler}
          >
            <span>{text}</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ToggleUiButton;
