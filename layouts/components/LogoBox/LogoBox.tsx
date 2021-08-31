import styles from "./LogoBox.module.scss";

interface LogoBoxProps {
  imgSrc?: string;
  title?: string;
}

const Card: React.FC<LogoBoxProps> = ({
  imgSrc = "./arla-logo-png-transparent.png",
  title = "Evolution gaming",
}) => {
  return (
    <div className={styles.logoBox}>
      <img src={imgSrc} alt={title} />
    </div>
  );
};

export default Card;
