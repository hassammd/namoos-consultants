import style from "./Card.module.css";

const Card = ({ title, point1, point2, point3, point4, point5 }) => {
  return (
    <>
      <div className={style.card}>
        <h4>{title}</h4>
        <ul>
          <li>{point1}</li>
          <li>{point2}</li>
          <li>{point3}</li>
          <li>{point4}</li>
          <li>{point5}</li>
        </ul>
      </div>
    </>
  );
};
export default Card;
