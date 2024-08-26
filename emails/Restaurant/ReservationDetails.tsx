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
  checkInDate: string;
  checkOutDate: string;
  time: string;
};

export default function Details({
  firstName,
  email,
  organization = 'N/A',
  guests,
  checkInDate,
  checkOutDate,
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
                <br />• <strong>Check-In Date:</strong> {checkInDate}
                <br />• <strong>Check-Out Date:</strong> {checkOutDate}
                <br />• <strong>Time:</strong> {time}
              </Text>
              <Hr />
              <Text>
                We look forward to welcoming you and ensuring you have an
                unforgettable experience. If you have any special requests or
                need further assistance, please don't hesitate to contact us.
              </Text>
              <Button href="https://lalumierdouce-restaurant-demowebsite.vercel.app/">
                Manage your Reservation
              </Button>
              <Hr />
              <Text>
                If you have any questions or need to make changes to your
                reservation, please contact us at:
                <br />• Email:
                <Link href="mailto:info@tekmucreations.com">
                   <Link href="mailto:mutau85@gmail.com">info.lalumierdouce-restaurant.com</Link>
                </Link>
                <br />• <strong>Phone:</strong> +956 677 494 340
              </Text>
              <Hr />
              <Section>
                <Text>
                  <strong>Management</strong>
                  <br />                 
                </Text>
                <Text>
                  <br />
                  <strong>Contact Information:</strong>
                  <br />
                  <strong>Phone:</strong> +956 677 494 340
                  <br />
                  <strong>Email:</strong>
                  <Link href="mailto:mutau85@gmail.com">info.lalumierdouce-restaurant.com</Link>
                  <br />
                  <strong>Address:</strong> 10725 NE Ocean Blvd #LOT 138 Jensen Beach, Florida
                  <br />
                  <strong>Website:</strong>
                  <Link href="https://lalumierdouce-restaurant-demowebsite.vercel.app/">
                    www.lalumierdouce-restaurant.com
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
