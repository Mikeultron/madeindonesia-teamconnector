import styles from "./styles.module.scss";

const InstructionsBulletList = () => {
  return (
    <ul className={styles.wrapper}>
      <li>
        Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin
        porta est convallis lacus blandit
      </li>
      <li>Pretium sed non enim. Maecenas lacinia non orci at aliquam.</li>
      <li>
        Donec finibus, urna bibendum ultricies laoreet, augue eros luctus
        sapien, ut euismod leo tortor ac enim.
      </li>
    </ul>
  );
};

export default InstructionsBulletList;
