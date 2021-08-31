import styles from "./ClubMark.module.scss";

interface ClubMarkProps {
  markSrc?: string;
  title: string;
}

const ClubMark: React.FC<ClubMarkProps> = ({
  markSrc = "https://fapi.sportal.bg/assets/16032021/1615898853233.png",
  title,
}) => {
  return (
    <div className={styles.clubMark}>
      <div>
        <img src={markSrc} alt={title} />
        {title}
      </div>
    </div>
  );
};

export default ClubMark;
