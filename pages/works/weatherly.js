import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Weatherly">
    <Container>
      <Title>Weatherly</Title>
      <P>
        A tool that leverages OpenWeather Api to display weather information about a specific location
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mosesakor.github.io/weatherJS/">
              https://mosesakor.github.io/weatherJS/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JavaScript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/thumbWeatherly.png" alt="Weatherly" />
    </Container>
  </Layout>
);

export default Work