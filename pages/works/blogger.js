import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Blogger">
    <Container>
      <Title>Blogger</Title>
      <P>
          A Blogging website built with Rails and Trix - a rich text editor
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://still-mountain-36025.herokuapp.com/">
          https://still-mountain-36025.herokuapp.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Rails, PostgreSQL</span>
        </ListItem>
      </List>
    
      <WorkImage src="/images/works/rails-blog-homepage.png" alt="Blogger" />
      <WorkImage src="/images/works/rails-blog-article-show-page.png" alt="Blogger" />
      
    </Container>
  </Layout>
);

export default Work