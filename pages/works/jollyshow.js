import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
    <Layout title="JollyShow">
        <Container>
            <Title>JollyShow</Title>
            <P>
                An NFT landing page built with ReactJS
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://jollyshow.netlify.app">
                        https://jollyshow.netlify.app<ExternalLinkIcon mx="2px" />
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

            <WorkImage src="/images/works/jollyshow_01.png" alt="JollyShow" />
            <WorkImage src="/images/works/jollyshow_02.png" alt="JollyShow" />
        </Container>
    </Layout>
);

export default Work