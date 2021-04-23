import { Discription } from "./Discription";
import { QuestionForm } from "./QuestionForm";
import { BlockQuestions } from "./BlockQuestions";
import { AuthBtn } from "./admin/AuthBtn";
import { Row } from "react-bootstrap";

export const User = () => {
  return (
    <>
      <Row className="mt-2">
        <Discription />
      </Row>
      <Row className="mt-4">
        <QuestionForm />
      </Row>
      <BlockQuestions />
      <AuthBtn />
    </>
  );
};
