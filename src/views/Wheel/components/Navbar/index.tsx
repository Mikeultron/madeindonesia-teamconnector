import Button from "atoms/Button";
import Image from "next/image";
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image src="/images/logo.png" width={152} height={48} alt="Logo" />
        </div>
        <div className={styles.actions}>
          <div className={styles.action}>
            <Image
              src="/images/user.png"
              width={32}
              height={32}
              alt="User icon"
            />
          </div>
          <div className={styles.action}>
            <Image
              src="/images/book.png"
              width={32}
              height={32}
              alt="Book icon"
            />
          </div>
          <div className={styles.action}>
            <Button>Finish Session</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
