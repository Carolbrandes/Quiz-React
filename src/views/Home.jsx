import { useContext } from "react";
import { AppContext } from "../Store";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

export default () => {
  const { numberOfQuestions, setNumberOfQuestions } = useContext(AppContext);

  const nextStep = () => {
    console.log(numberOfQuestions);
    if (numberOfQuestions > 0) {
      localStorage.setItem("numberOfQuestions", numberOfQuestions);
      setTimeout(() => {
        window.location.href = "/questions";
      }, 1000);
    }
  };

  const CardWrapper = styled.div`
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .input {
      margin-top: 1.4rem;

      label {
        display: block;
        width: 180px;
      }

      input {
        width: 50px;
        padding-left: 2rem;
      }
    }
  `;
  const ButtonWrapper = styled.div`
    padding-top: 2rem;
  `;
  return (
    <Container>
      <CardWrapper>
        <Card>
          <CardContent className="center-vertical">
            <Typography variant="h4" component="h1">
              Welcome to the quiz!
            </Typography>
            <Typography variant="h6" component="p">
              Choose the number of questions you want to answer in the field
              below
            </Typography>

            <TextField
              value={numberOfQuestions}
              onInput={({ target }) => setNumberOfQuestions(target.value)}
              id="standard-basic"
              label="Number of questions"
              type="number"
              className="input"
            />

            <ButtonWrapper>
              <Button onClick={nextStep} variant="contained" color="primary">
                Start
              </Button>
            </ButtonWrapper>
          </CardContent>
        </Card>
      </CardWrapper>
    </Container>
  );
};
