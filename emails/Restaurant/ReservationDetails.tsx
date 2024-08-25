import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';

type DetailsProps = {
  firstName: string;
  email: string;
  organization?: string;
  guests: string;
  date: string;
  time: string;
};

export default function Details({
  firstName,
  email,
  organization = 'N/A',
  guests,
  date,
  time,
}: DetailsProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank You for Your Reservation at LalumierDouce Restaurant</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading>Your Reservation Details at LalumierDouce Restaurant</Heading>
              <Text>Dear {firstName},</Text>
              <Text>
                Thank you for your reservation request. We are thrilled to have
                you at Lalumier Douce Restaurant. Below are the details of your reservation:
              </Text>
              <Hr />
              <Text>
                <strong>Reservation Details:</strong>
                <br />• <strong>Name:</strong> {firstName}
                <br />• <strong>Email:</strong> {email}
                <br />• <strong>Organization:</strong> {organization}
                <br />• <strong>Number of Guests:</strong> {guests}
                <br />• <strong>Date:</strong> {date}
                <br />• <strong>Time:</strong> {time}
              </Text>
              <Hr />
              <Text>
                We look forward to welcoming you and ensuring you have an
                unforgettable experience. If you have any special requests or
                need further assistance, please don't hesitate to contact us.
              </Text>
              <Button href="https://www.langanisafari.com/reservations">
                Manage your Reservation
              </Button>
              <Hr />
              <Text>
                If you have any questions or need to make changes to your
                reservation, please contact us at:
                <br />• Email:
                <Link href="mailto:info@tekmucreations.com">
                  info@tekmucreations.com
                </Link>
                <br />• Phone: +260 968 555518
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
