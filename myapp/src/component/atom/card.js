import style from "./card.module.css";
export default function Card({pic ,Name,Position,exp}) {
  return (
    <>
      <div className={style.wrapper}>
        <img
          src={pic}
          alt=""
          className={style.image}
        />
        {/* <p >Virat</p> */}
        <p className={style.name}>{Name}</p>
        <p className={style.position}>{Position}</p>
        <p>{exp}</p>
      </div>
    </>
  );
}
