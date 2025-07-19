import "./AboutMe.css";
import AboutImg from "../../../assets/images/about.jpg";
function AboutMe() {
  return (
    <section id="about">
      <div className="about">
        <h2 className="title" style={{ fontFamily: "Lalezar" }}>
          درباره من
        </h2>
        <img className="about-img" src={AboutImg} alt="milad" />
        <p className="info">
          نام من میلاد بهرامی است و یک توسعه دهنده وب (web devloper) هستم. سن من
          26 سال است و از 19 سالگی شغلم را شروع کرده ام و اکنون 7 سال است که در
          این زمینه فعالیت میکنم برنامه نویسی شغل مورد علاقه من است و من هر روز
          حد اقل روزانه 8 ساعت به این کار ارزشمند و شگفت انگیز میپردازم من علاوه
          بر ساخت اپلیکیشن های تحت وب , آموزنده این هنر شگفت و اعجاب انگیز هستم
          و زبان ها , فریموورک ها , کتابخوانه ها , پکیج ها و... ; را به شما
          آموزش میدهم
        </p>{" "}
      </div>{" "}
    </section>
  );
}

export default AboutMe;