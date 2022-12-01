import Button from "atoms/Button";
import InstructionsBulletList from "atoms/InstructionsBulletList";
import Image from "next/image";
import InGamePopupTemplate from "templates/InGamePopupTemplate";
import styles from "./styles.module.scss";

interface IProps {
  onClose?: () => void;
}

const HowToPlayPopup = ({ onClose }: IProps) => {
  return (
    <InGamePopupTemplate>
      <div className={styles.wrapper}>
        <div>
          <Image
            src="/images/women.png"
            width={500}
            height={292}
            priority
            alt="3 Women hanging out and having a laugh together"
          />
        </div>
        <InstructionsBulletList />
        <p className={styles.instructionText}>
          A session of TeamConnector may require <span>± 60 minutes</span> to
          finish.
        </p>
        <div>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </InGamePopupTemplate>
  );
};

export default HowToPlayPopup;
