import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Button,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import { BioSection, BioYear } from "../components/bio";
import { IoLogoGithub } from "react-icons/io5";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack web developer based in Nigeria
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Moses Akor
            </Heading>
            <p>Content Creator (Developer / Writer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          ></Box>
        </Box>
        <Section>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            I am a freelance and full-stack web developer based in Abuja. I
            juggle between backend development (Ruby on Rails / ExpressJs) and
            frontend with (React / Nextjs). I&apos;m extremely passionate about
            web development and design in all it's forms and helping small
            businesses and artisans build and improve their online presence.
            When I'm not doing computer stuff, you&apos;d probably find me
            playing indoor football or with my piano.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Biography
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Kaduna, Nigeria.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Secured a Diploma Of Higher Education from the Bachelor of Computer
            and Information Security Programme at Plymouth University in
            England.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/mosesakor" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @mosesakor
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
