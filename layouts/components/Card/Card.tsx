import styles from "./Card.module.scss";

interface CardProps {
  type?: string;
  imgSrc?: string;
  videoSrc?: string;
  bgSrc?: string;
  title: string;
  text: string;
  cta?: {
    label: string;
    link: string;
    active?: boolean;
  };
}

const Card: React.FC<CardProps> = ({
  type = "type1",
  imgSrc = "./basket.png",
  videoSrc,
  bgSrc = "./pattern1.png",
  title,
  text,
  cta
}) => {
  return (
    <section
      className={`${styles.card} ${styles[type]}`}
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <div className="row">
        <div className="col-md-6 d-flex">
          <div className={`${styles.content}`}>
            <h1>{title}</h1>
            <p>{text}</p>
            {cta && <a href="{cta.link}" className={`${styles.cta} btn btn-primary btn-lg active`} role="button" aria-pressed="true">{cta.label}</a>}
          </div>
        </div>
        <div className="col-md-6">
          {imgSrc && !videoSrc && <img className="img-fluid" src={imgSrc} alt={title} />}
          {videoSrc && <video src="https://doggo.s3.amazonaws.com/output.webm" loop={true} muted={true} autoPlay={true} playsInline={true} ></video>}
        </div>
      </div>
    </section>
  );
};

export default Card;
