import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbJollyshow from "../public/images/thumbJollyshow.png";
import thumbOandaHashes from "../public/images/thumbOandaHashes.png"
import thumbSystembuilder from "../public/images/thumbSystembuilder.png";
import thumbWeatherly from "../public/images/thumbWeatherly.png";
import thumbBlogger from "../public/images/thumbBlogger.png"

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="jollyshow"
            title="JollyShow"
            thumbnail={thumbJollyshow}
          >
            A NFT Landing Page.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="oandahashes"
            title="OandaHashes"
            thumbnail={thumbOandaHashes}
          >
            A clone of greenhashes crypto mining website
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="systembuilder"
            title="SystemBuilder"
            thumbnail={thumbSystembuilder}
          >
            A PC Inventory App for building high-performant computers.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="weatherly"
            title="Weatherly"
            thumbnail={thumbWeatherly}
          >
            Weather app built with JavaScript.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="blogger"
            title="Blogger"
            thumbnail={thumbBlogger}
          >
            Blogging app built with Rails and Trix.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
