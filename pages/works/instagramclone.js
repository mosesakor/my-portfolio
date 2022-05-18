import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
    <Layout title="InstagramClone">
        <Container>
            <Title>Instagram Clone</Title>
            <P>
                A clone of Instagram's login page
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://instagramlogln.herokuapp.com">
                        https://instagramlogln.herokuapp.com<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>ReactJS</span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/instagram_01.png" alt="Instagram" />
            <WorkImage src="/images/works/instagram_02.png" alt="Instagram_mobile" />
        </Container>
    </Layout>
);

export default Work