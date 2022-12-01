import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IProps {
  children: ReactNode;
  title?: string;
  subTitle?: string;
}

const InGamePopupTemplate = ({
  children,
  title = "How to play",
  subTitle = "TeamConnector 2.0",
}: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>{title}</p>
          <h1>{subTitle}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default InGamePopupTemplate;
