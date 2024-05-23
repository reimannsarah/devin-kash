import { CSSProperties } from "@emotion/serialize";
import { Container, Divider, Typography } from "@mui/material";
import { appStrings } from "../../assets/text/appStrings";

const Header = () => {
  const { header } = appStrings
  const { name, fb, spotify, instagram } = header

  return (
    <Container sx={styles.outerContainer}>
      <Typography variant="h2" sx={styles.name}>
        {name}
      </Typography>
      <Divider sx={styles.divider} />
      <Container sx={styles.links}>
        <Typography>{spotify}</Typography>
        <Typography>{fb}</Typography>
        <Typography>{instagram}</Typography>
      </Container>
    </Container>
  );
};

const styles = {
  outerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    color: "white",
    textAlign: "center",
    margin: "5% 20% 2%",
  },
  divider: {
    backgroundColor: "white",
    opacity: "50%",
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
} as const satisfies Record<string, CSSProperties>;

export default Header;
