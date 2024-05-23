import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from "@mui/material"
import Header from "../sub/Header"
import About from '../sub/About';
import { CSSProperties } from 'react';

const Home = () => {
  return (
    <Container sx={styles.outer}>
      <Container>
        <Header />
        <About />
      </Container>
    </Container>
  )
}

const styles = {
  outer: {
    padding: '0 0 10% 0'
  }

} as const satisfies Record<string, CSSProperties>

export default Home