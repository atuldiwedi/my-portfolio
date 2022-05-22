import React from "react";

import {
  Section,
  H1Header,
  HtmlText,
  Ptag,
  ParaBr,
  SplitContainer,
  SplitSideContainer,
} from "../../Global/Js/GlobalComp";
import { Form, Input, Message } from "./Contant.element";
const Contact = () => {
  return (
    <>
      <Section>
        <HtmlText>{"<html>"}</HtmlText>
        <HtmlText tab="1">{"<body>"}</HtmlText>

        <SplitContainer>
          <SplitSideContainer>
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
                <Input type="text" placeholder="Name" />
                <Input type="text" placeholder="Email" />
                <Input type="text" placeholder="Subject" />
                <Message
                  type="text"
                  placeholder="Message"
                  contenteditable="true"
                />
              </Form>
            </Ptag>
            <HtmlText tab="2">{"</form>"}</HtmlText>
          </SplitSideContainer>
          <SplitSideContainer>dbkbkbk</SplitSideContainer>
        </SplitContainer>
        <HtmlText tab="1">{"</body>"}</HtmlText>
        <HtmlText>{"</html>"}</HtmlText>
      </Section>
    </>
  );
};

export default Contact;
