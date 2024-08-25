import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import Image from 'next/image';
import * as React from 'react';
import photo from '../../public/assets/profile.jpg';

type AuditProps = {
  firstName: string;
  photo?: string;
};

export default function Audit({ firstName, photo }: AuditProps) {
  return (
    <Html>
      <Head />
      <Preview>Discover Our Passion for Langani Safari</Preview>
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
                During our exploration, we also reviewed your current website
                and noticed a few areas that could be improved to better reflect
                the quality and uniqueness of Langani Safari. Inspired by this,
                we decided to design a demo website highlighting these
                improvements. Along with the demo, we have also prepared a
                comprehensive website audit report, which we are offering at no
                cost to you.
              </Text>
              <Text>
                We would love the opportunity to present this demo website and
                the audit report to you, and discuss how we can help elevate
                Langani Safari's online presence. We believe that with a few
                strategic enhancements, your website can truly reflect the
                beauty and excellence of your resort.
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
                  info@tekmucreations.com
                </Link>
                <br />• Phone: +260 968 555518
              </Text>
              <Text>
                Thank you for considering Tekmu Creations. We look forward to
                the opportunity to work with you.
              </Text>
              <Hr />
              <Section>
                <Text>
                  <strong>Isiteketo Mutau</strong>
                  <br />
                  Full Stack Web Developer
                  <br />
                  Tekmu Creations
                </Text>
                <Text>
                  <br />
                  <strong>Contact Information:</strong>
                  <br />
                  <strong>Phone:</strong> +260 968 555518
                  <br />
                  <strong>Email:</strong>
                  <Link href="mailto:mutau85@gmail.com">mutau85@gmail.com</Link>
                  <br />
                  <strong>Address:</strong> 1/4721 Ngwee Road, Longacres, Lusaka
                  <br />
                  <strong>Website:</strong>
                  <Link href="https://www.tekmucreations.tech">
                    www.tekmucreations.tech
                  </Link>
                </Text>
                <Text>
                  <br />
                  <Link href="https://www.linkedin.com/in/isiteketomutau/">
                    LinkedIn
                  </Link>
                  |<Link href="https://twitter.com/your-profile">Twitter</Link>{' '}
                  |
                  <Link href="https://www.instagram.com/tk_mutau/">
                    Instagram
                  </Link>
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
