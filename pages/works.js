import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSystembuilder from '../public/images/thumbSystembuilder.png'
import thumbWeatherly from '../public/images/thumbWeatherly.png'
const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.2}>
                    <WorkGridItem id="systembuilder" title="SystemBuilder" thumbnail={thumbSystembuilder}>
                        An PC Inventory App for building high-performant computers.
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="weatherly" title="Weatherly" thumbnail={thumbWeatherly}>
                        Weather app built with JavaScript.
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <Divider my={6}/>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works;