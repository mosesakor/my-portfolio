import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="OandaHashes">
    <Container>
      <Title>Oanda Hashes</Title>
      <P>
        A clone of GreenHashes crypto-mining website
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="http://oandahashes.tk/">
          https://oandahashes.tk/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, ExpressJs, MongoDB, Moongoose</span>
        </ListItem>
      </List>
    
      <WorkImage src="/images/works/oandahashes_01.png" alt="OandaHashes" />
      <WorkImage src="/images/works/oandahashes_02.png" alt="OandaHashes_dashboard" />
      
    </Container>
  </Layout>
);

export default Work