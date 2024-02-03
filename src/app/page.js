import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const missionFlashes = [
    {title: "Hobby of Biking",
      imageSrc: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio morbi."
    },
    {title: "Accessability",
      imageSrc: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio morbi."
    },
    {title: "Advocacy For Biking",
      imageSrc: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio morbi."
    },
    {title: "Biking For Environment",
      imageSrc: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio morbi."
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
            <p>{obj.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.leadershipTeam}>
        {leadershipTeam.map((obj, i) => (
          <div key={`leadership${i}`} className={styles.leadershipTeamMember}>
            <p>{obj.name}</p>
            <Image
              className={styles.image}
              src="/placehold2.png"
              height={210}
              width={150}
              fill={false}
              alt="placehold2"
            />
            <p>{obj.title}</p>
            <p>{obj.email}</p>
          </div>
        ))}
        <div className={styles.groupPictures}/>
          <h2>Group picture</h2>
      </div>

    </div>
  );
}
