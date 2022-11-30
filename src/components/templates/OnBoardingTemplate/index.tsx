import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IProps {
  children: ReactNode;
  title?: string;
  subTitle?: string;
}

const OnBoardingTemplate = ({
  children,
  title = "Welkom bij",
  subTitle = "TeamConnector 2.0",
}: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <div className={styles.title}>
            <p>{title}</p>
            <h1>{subTitle}</h1>
          </div>
          {children}
        </div>
        <div className={styles.wheel}></div>
      </div>
    </div>
  );
};

export default OnBoardingTemplate;
