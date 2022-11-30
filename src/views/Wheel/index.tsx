import Image from "next/image";
import Navbar from "./components/Navbar";
import styles from "./styles.module.scss";

const Wheel = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Navbar />
        <div className={styles.wheelContainer}>
          <Image
            src="/images/wheel-2.png"
            width={900}
            height={611}
            alt="Wheel"
          />
        </div>
      </div>
    </div>
  );
};

export default Wheel;
