import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const missionFlashes = [
    {title: "HOBBY OF BIKING",
      imageSrc: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
    },
    {title: "ACCESSABILITY OF BIKING",
      imageSrc: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscingdolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut."
    },
    {title: "ADVOCACY FOR BIKING",
      imageSrc: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempodolor sit amet, consecteturr incididunt ut."
    },
    {title: "BIKING FOR ENVIRONMENT",
      imageSrc: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempordolor sit amet, consectetur incididunt ut."
    },
  ]
  const leadershipTeam = [
    {name: "John Doe",
      imageSrc: "",
      title: "president",
      email: "lorem@ipsum.com",
    },
    {name: "John Doe",
      imageSrc: "",
      title: "president",
      email: "lorem@ipsum.com",
    },
    {name: "John Doe",
      imageSrc: "",
      title: "president",
      email: "lorem@ipsum.com",
    },
    {name: "John Doe",
      imageSrc: "",
      title: "president",
      email: "lorem@ipsum.com",
    },
    {name: "John Doe",
      imageSrc: "",
      title: "president",
      email: "lorem@ipsum.com",
    },
    {name: "John Doe",
      imageSrc: "",
      title: "president",
      email: "lorem@ipsum.com",
    },
  ]

  const updates = [
    {imageSrc: "",
      description: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
    },
    {imageSrc: "",
      description: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
    }
  ]


  return (
    <div className={styles.body}>
      <div className={styles.flashOfEvents}>
        <Image
          className={styles.image}
          src="/placehold1.png"
          width={1721}
          height={495}
          fill={false}
          alt="placehold1"
        />
        <h2>Flash of events</h2>
      </div>
      <div className={styles.missionFlashes}>
        {missionFlashes.map((obj, i) => (
          <div key={`mission${i}`} className={styles.missionContainer}>
            <h3>{obj.title}</h3>
            <Image
              className={styles.image}
              src="/placehold2.png"
              width={200}
              height={150}
              fill={false}
              alt="placehold2"
            />
            <p>{obj.description}</p>
          </div>
        ))}
      </div>
      <h2 className={styles.leadershipTitle}>LEADERSHIP TEAM</h2>
      <div className={styles.leadershipTeam}>
        <Image
          src="/arrowleft.jpg"
          width={47}
          height={68}
          alt="left arrow"
        />
        {leadershipTeam.map((obj, i) => (
          <div key={`leadership${i}`} className={styles.leadershipTeamMember}>
            <Image
              className={styles.image}
              src="/placehold2.png"
              width={200}
              height={150}
              fill={false}
              alt="placehold2"
            />
            <p>{obj.name}</p>
            <p>{obj.title}</p>
            <p>{obj.email}</p>
          </div>
        ))}
        <Image
          src="/arrowright.jpg"
          width={47}
          height={68}
          alt="left arrow"
        />
      </div>
      <h2 className={styles.updatesTitle}>UPDATES</h2>
      <div className={styles.updates}>
        {updates.map((obj, i) => (
          <div key={`update${i}`} className={styles.updateContainer}>
            <Image
              src="/placehold2.png"
              width={424}
              height={393}
            />
            <p>{obj.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.flashOfEvents}>
        <Image
          className={styles.image}
          src="/placehold1.png"
          width={1721}
          height={495}
          fill={false}
          alt="placehold1"
        />
        <h2>Group picture</h2>
      </div>

    </div>
  );
}
