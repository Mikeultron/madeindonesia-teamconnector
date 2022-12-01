import Image from "next/image";
import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputAdd = ({ label, id, ...rest }: IProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className={styles.container}>
        <input {...rest} id={id} />
        <div className={styles.iconButton}>
          <Image src="/images/plus.png" width={14} height={14} alt="Icon" />
        </div>
      </div>
    </div>
  );
};

export default InputAdd;
