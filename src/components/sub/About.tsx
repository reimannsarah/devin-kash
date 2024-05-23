import { Container, Typography } from "@mui/material";
import dev1 from "../../assets/imgs/dev1.jpg";
import dev2 from "../../assets/imgs/dev2.jpg";
import { appStrings } from "../../assets/text/appStrings";
import { CSSProperties } from "react";

const About = () => {
  const { about } = appStrings;
  const { title, content } = about;

  return (
    <>
      <Container sx={styles.outerContainer}>
        <img src={dev1} alt="" style={styles.img} />
        <img src={dev2} alt="" style={styles.img} />
        {/* <Typography>{content}</Typography> */}
      </Container>
      <Container sx={styles.aboutText}>
        <Typography variant="h3" sx={styles.content}>{title}</Typography>
        <Typography sx={styles.content}>{content}</Typography>
      </Container>
    </>
  );
};

const styles = {
  outerContainer: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    width: "50%",
    borderRadius: "10%",
  },
  aboutText: {
    marginTop: '5%'
  },
  content: {
    textAlign: 'center',
    color: "white",
    opacity: "70%",
  },
} as const satisfies Record<string, CSSProperties>;

export default About;
