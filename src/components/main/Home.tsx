import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import Header from "../sub/Header";
import About from "../sub/About";
import Links from "../sub/Links";
import { CSSProperties } from "react";

const Home = () => {
  return (
    <Container sx={styles.outer}>
      <Container>
        <Header />
        <About />
        <Links />
      </Container>
    </Container>
  );
};

const styles = {
  outer: {
    padding: "0 0 10% 0",
  },
  video: {
    width: "100%",
  },
} as const satisfies Record<string, CSSProperties>;

export default Home;
