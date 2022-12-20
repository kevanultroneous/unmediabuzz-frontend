import styles from "@/styles/common/ContainerWrraper.module.css";

const ContainerWrraper = ({ children, customClass }) => {
  return (
    <div className={`${styles.ContainerWrraper} ${customClass}`}>
      {children}
    </div>
  );
};

export default ContainerWrraper;
