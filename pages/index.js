import { Container, Box, Heading } from "@chakra-ui/react"
import Paragraph from "../components/paragraph"
import Section from '../components/section'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack web developer based in Nigeria
            </Box>
            
            <Box display={{md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Moses Akor
                    </Heading>
                    <p>Content Creator (Developer / Writer )</p>
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6}} align="center">

                </Box>
            </Box>
            <Section>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    I am a freelance and full-stack web developer based in Abuja.
                    I juggle between backend development (Ruby on Rails / ExpressJs)
                    and frontend (React / Nextjs).
                    I&apos;m extremely passionate about web development and design in
                    all it's forms and helping small businesses and artisans build and
                    improve their online presence.  
                </Paragraph>
                
            </Section>
        </Container>
    )
}

export default Page