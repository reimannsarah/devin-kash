import { Container, Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import { appStrings } from "../../assets/text/appStrings";
import dev1 from "../../assets/imgs/dev1.jpg";

const Links = () => {
  const links = appStrings.links;
  const { spotify, fb, instagram } = links;

  return (
    <>
      <Container disableGutters sx={styles.linksContainer}>
        <img src={dev1} alt="" style={styles.img} />
        <Container sx={styles.aboutText}>
          <Typography sx={styles.linkText}>
            <a
              style={styles.link}
              href="https://open.spotify.com/artist/09ehMdrQd4QcyS6Q4pScaD"
              target="_blank"
            >
              {spotify}
            </a>
          </Typography>
          <Typography sx={styles.linkText}>
            <a
              style={styles.link}
              href="https://www.facebook.com/devin.arrington"
              target="_blank"
            >
              {fb}
            </a>
          </Typography>
          <Typography sx={styles.linkText}>
            <a
              style={styles.link}
              href="https://www.instagram.com/devinkash/"
              target="_blank"
            >
              {instagram}
            </a>
          </Typography>
        </Container>
      </Container>
    </>
  );
};

export default Links;

const styles = {
  outerContainer: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    width: "50%",
    borderRadius: "10%",
  },
  linksContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: "5%",
  },
  link: {
    textDecoration: "none",
    color: "white",
    opacity: "70%",
  },
  linkText: {
    fontSize: "100px",
  },
  aboutText: {
    marginTop: "5%",
  },
  content: {
    textAlign: "center",
    color: "white",
    opacity: "70%",
  },
} as const satisfies Record<string, CSSProperties>;
