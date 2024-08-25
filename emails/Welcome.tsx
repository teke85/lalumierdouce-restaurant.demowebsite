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
} from '@react-email/components';
import * as React from 'react';

type EmailProps = {
  firstName: string;
};

export default function Email({ firstName }: EmailProps) {
  return (
    <Html>
      <Head>
        <Heading>Hello, {firstName}!</Heading>
        <Preview>
          You're now ready to make live transactions with Stripe!
        </Preview>
        <Body>
          <Container>
            <Section>
              <Img src="" width="49" height="21" alt="Stripe" />
              <Hr />
              <Text>
                Thanks for submitting your account information. You're now ready
                to make live transactions with Stripe!
              </Text>
              <Text>
                You can view your payments and a variety of other information
                about your account right from your dashboard.
              </Text>
              <Button href="https://langanisafari-demowebsite.vercel.app/">
                View your Demo website here
              </Button>
              <Hr />
              <Text>
                If you haven't finished your integration, you might find our
                <Link href="https://stripe.com/docs">docs</Link>
                handy.
              </Text>
              <Text>
                Once you're ready to start accepting payments, you'll just need
                to use your live
                <Link href="https://dashboard.stripe.com/login?redirect=%2Fapikeys">
                  API keys
                </Link>
                instead of your test API keys. Your account can simultaneously
                be used for both test and live requests, so you can continue
                testing while accepting live payments. Check out our{' '}
                <Link href="https://stripe.com/docs/dashboard">
                  tutorial about account basics
                </Link>
                .
              </Text>
              <Text>
                Finally, we've put together a
                <Link href="https://stripe.com/docs/checklist/website">
                  quick checklist
                </Link>
                to ensure your website conforms to card network standards.
              </Text>
              <Text>
                We'll be here to help you with any step along the way. You can
                find answers to most questions and get in touch with us on our{' '}
                <Link href="https://support.stripe.com/">support site</Link>.
              </Text>
              <Text>— The Stripe team</Text>
              <Hr />
              <Text>
                Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080
              </Text>
            </Section>
          </Container>
        </Body>
      </Head>
    </Html>
  );
}
