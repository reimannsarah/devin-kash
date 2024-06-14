import { CSSProperties } from "@emotion/serialize";
import { Container, Divider, Typography } from "@mui/material";
import { appStrings } from "../../assets/text/appStrings";
import tapeVideo from "../../assets/video/loop.mp4";

const Header = () => {
  const { header } = appStrings;
  const { name, title1, title2, title3 } = header;

  return (
    <Container sx={styles.outerContainer}>
      <Container sx={styles.videoContainer}>
        <video autoPlay loop muted style={styles.videoContainer}>
          <source src={tapeVideo}></source>
        </video>
      </Container>
      <Container sx={styles.nameContainer}>
        <Typography sx={styles.nameText}>{name}</Typography>
        <Container sx={styles.titlesContainer}>
          <Typography sx={styles.titlesText}>{title1}</Typography>
          <Typography sx={styles.titlesText}>{title2}</Typography>
          <Typography sx={styles.titlesText}>{title3}</Typography>
        </Container>
      </Container>
      <Divider sx={styles.divider} /> 
      {/* <Container sx={styles.links}> */}
     
      {/* </Container> */}
    </Container>
  );
};

const styles = {
  outerContainer: {
    display: "grid",
    gridTemplateColumns: "repeat, 4(1fr)",
    gridTemplateRows: "repeate, 3(1fr)",
  },
  videoContainer: {
    width: "100%",
    gridArea: "1 / 1 / 4 / 5",
  },
  nameContainer: {
    color: "white",
    gridArea: "3 / 3 / 4 / 5",
    fontSize: "100px",
  },
  nameText: {
    fontSize: "100px",
    paddingRight: "10px",
    lineHeight: "1",
  },
  titlesContainer: {
    gridArea: "2 / 3 / 3 / 5",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    justifyContent: "right",
    paddingRight: "10%",
  },
  titlesText: {
    color: "white",
    fontSize: '24px',
    fontWeight: '100',
    paddingBottom: '10px'
  },
  divider: {
    backgroundColor: "white",
    opacity: "50%",
    marginTop: '20px'
  },
  links: {
    width: "100%",
    margin: "5% 0",
    alignContent: "space-between",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    color: "white",
    opacity: "70%",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
} as const satisfies Record<string, CSSProperties>;

export default Header;
