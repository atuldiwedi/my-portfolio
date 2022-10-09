import React from "react";

import {
  Section,
  H1Header,
  HtmlText,
  Ptag,
  ParaBr,
  SplitContainer,
  SplitSideContainer,
  PrimaryButton,
} from "../../Global/Js/GlobalComp";
import { Container, Form, Input, Message } from "./Contant.element";
const Contact = () => {
  return (
    <>
      <Section>
        <SplitContainer>
          <SplitSideContainer>
            <HtmlText>{"<html>"}</HtmlText>
            <HtmlText tab="1">{"<body>"}</HtmlText>
            <HtmlText tab="2">{"<h1>"}</HtmlText>
            <H1Header tab="3">
              Want to <br /> contact me?
            </H1Header>
            <HtmlText tab="2">{"</h1>"}</HtmlText>
            <HtmlText tab="2">{"<p>"}</HtmlText>
            <Ptag tab="3">
              Please use the below form or send an email to
              atuldiwedi78@gmail.com:
            </Ptag>
            <HtmlText tab="2">{"</p>"}</HtmlText>

            <HtmlText tab="2">{"<form>"}</HtmlText>
            <Ptag tab="3">
              <Form>
                <SplitContainer>
                  <SplitSideContainer>
                    <Input type="text" placeholder="Name" />
                  </SplitSideContainer>
                  <SplitSideContainer>
                    <Input type="text" placeholder="Email" />
                  </SplitSideContainer>
                </SplitContainer>

                <Input type="text" placeholder="Subject" />
                <Message
                  type="text"
                  placeholder="Message"
                  contenteditable="true"
                />
                <Container>
                  <PrimaryButton>Send Message</PrimaryButton>
                </Container>
              </Form>
            </Ptag>
            <HtmlText tab="2">{"</form>"}</HtmlText>
            <HtmlText tab="1">{"</body>"}</HtmlText>
            <HtmlText>{"</html>"}</HtmlText>
          </SplitSideContainer>
          <SplitSideContainer></SplitSideContainer>
        </SplitContainer>
      </Section>
    </>
  );
};

export default Contact;
