import {
  faAddressBook,
  faBuilding,
  faCalendarDays,
} from "@fortawesome/free-regular-svg-icons";
import style from "./Achievements.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const Achievements = () => {
  const [experienceCount, setExperienceCount] = useState("");
  const [clientsCount, setClientsCount] = useState("");
  const [counts, setCounts] = useState({
    experience: 0,
    clients: 0,
    team: 0,
    companies: 0,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const countHandler = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // const inview = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (rect) {
        let experience = 0;
        let clients = 0;
        let team = 0;
        let companies = 0;

        const expEnd = 20;
        const clientsEnd = 100;
        const teamEnd = 5;
        const companiesEnd = 100;
        const counter = setInterval(() => {
          if (experience < expEnd) experience++;
          if (clients < clientsEnd) clients++;
          if (team < teamEnd) team++;
          if (companies < companiesEnd) companies++;

          setCounts({
            experience,
            clients,
            team,
            companies,
          });
        }, 20);
        window.removeEventListener("scroll", countHandler);
      }
    };
    countHandler();

    window.addEventListener("scroll", countHandler);
    return () => window.removeEventListener("scroll", countHandler);
  }, []);

  return (
    <>
      <section className={style.Achievements_section} ref={sectionRef}>
        <div className="container">
          <div className={style.Achievements_wrapper}>
            <div className={style.Achievements_card}>
              <div className={style.Achievements_icon}>
                <FontAwesomeIcon icon={faCalendarDays} />
              </div>
              <span>{counts.experience}+</span>
              <p>Years of Team Experience</p>
            </div>
            <div className={style.Achievements_card}>
              <div className={style.Achievements_icon}>
                <FontAwesomeIcon icon={faAddressBook} />
              </div>
              <span>{counts.clients}+</span>
              <p>Satisfied Clients</p>
            </div>
            <div className={style.Achievements_card}>
              <div className={style.Achievements_icon}>
                <FontAwesomeIcon icon={faPeopleGroup} />
              </div>
              <span>{counts.team}+</span>
              <p>Team Members</p>
            </div>
            <div className={style.Achievements_card}>
              <div className={style.Achievements_icon}>
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <span>{counts.companies}+</span>
              <p>Companies Formed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
