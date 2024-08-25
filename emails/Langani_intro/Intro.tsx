import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Img,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';

type EmailProps = {
  firstName: string;
};

export default function IntroEmail({ firstName }: EmailProps) {
  return (
    <Html>
      <Head>
        <Preview>Discover Our Passion for Langani Safari</Preview>
      </Head>
      <Tailwind>
      <Body>
        <Container>
          <Section>
            <Heading>Discover Our Passion for Langani Safari</Heading>
            <Text>Dear {firstName},</Text>
            <Text>
              I hope this message finds you well. My name is Isiteketo Mutau,
              and I am a Full Stack Web Developer at Tekmu Creations. Our team
              recently came across Langani Safari, and we were immediately
              captivated by the brand's unique charm and the exceptional
              experiences you offer to your guests.
            </Text>
            <Text>
              As experts in enhancing the digital presence of hospitality
              businesses, we understand the importance of a compelling online
              presence. We were so inspired by Langani Safari that we decided to
              take the initiative and design a demo website for you. Our goal
              was to create a digital experience that matches the outstanding
              quality of your resort.
            </Text>
            <Text>
              We would love the opportunity to present this demo website to you
              and discuss how we can help elevate Langani Safari's online
              presence. We believe that with a few strategic enhancements, your
              website can truly reflect the beauty and excellence of your
              resort.
            </Text>
            <Button href="https://langanisafari-demowebsite.vercel.app/">
              View your Demo website here
            </Button>
            <Hr />
            <Text>
              We are eager to collaborate with you and are confident that our
              expertise can bring significant value to Langani Safari. Please
              let us know a convenient time for a presentation or if you have
              any questions.
            </Text>
            <Hr />
            <Text>
              For further details or to schedule a demo presentation, please
              contact us at:
              <br />• Email:
              <Link href="mailto:info@tekmucreations.com">
                info@tekmucreations.tech
              </Link>
              <br />• Phone: +260 968 555518
            </Text>
            <Text>
              Thank you for considering Tekmu Creations. We look forward to the
              opportunity to work with you.
            </Text>
            <Hr />
            <Text>
              Best regards,
              <br />
              Isiteketo Mutau
              <br />
              Full Stack Web Developer
              <br />
              Tekmu Creations
            </Text>
            <Img src="./assets/me.jpg" alt="me" width="300" height="300" />
          </Section>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  );
}
