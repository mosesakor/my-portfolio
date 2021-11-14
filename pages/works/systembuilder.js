import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="SystemBuilder">
    <Container>
      <Title>System Builder</Title>
      <P>
        A tool that makes building computers easier. It allows for you to build
        your PC with your ideal specification using high quality components.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://express-pc-builder.herokuapp.com">
              https://express-pc-builder.herokuapp.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MongoDB, ExpressJS, NextJS, NodeJS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/systembuilder_01.png" alt="SystemBuilder" />
      <WorkImage src="/images/works/systembuilder_02.png" alt="SystemBuilder" />
    </Container>
  </Layout>
);

export default Work