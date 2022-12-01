import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label = "Label", id, ...rest }: IProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} {...rest} />
    </div>
  );
};

export default Input;
