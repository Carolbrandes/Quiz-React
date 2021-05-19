import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Store";
import { getQuestions } from "../services";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default () => {
  const { questions, setQuestions } = useContext(AppContext);
  const [radio, setRadio] = useState([]);
  const [saveQuestions, setSaveQuestions] = useState([]);

  const handleQuestions = async () => {
    const questions = await getQuestions(
      localStorage.getItem("numberOfQuestions")
    );
    setQuestions(questions.data.results);
  };

  const save = ({ question, answer, correct_answer }) => {
    setSaveQuestions([...saveQuestions, { question, answer, correct_answer }]);
  };

  const handleChange = (event, question, correct_answer) => {
    setRadio([...radio, event.target.value]);
    save({ question, answer: event.target.value, correct_answer });
  };

  const handleClick = () => {
    localStorage.setItem("result", JSON.stringify(saveQuestions));

    setTimeout(() => {
      window.location.href = "/result";
    }, 2000);
  };

  useEffect(() => {
    handleQuestions();
  }, []);

  const CardWrapper = styled.div`
    margin-bottom: 1.5rem;
    padding: 1.5rem;
  `;

  const ButtonsWrapper = styled.div`
    padding-bottom: 4rem;
    display: flex;
    justify-content: flex-end;
  `;

  return (
    <Container>
      {questions &&
        questions.map(
          ({ question, type, correct_answer, incorrect_answers }, index) => (
            <CardWrapper key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {`${index + 1}) ${question}`}
                  </Typography>

                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label={question}
                      name={question}
                      value={radio[index]}
                      onChange={(e) =>
                        handleChange(e, question, correct_answer)
                      }
                    >
                      {incorrect_answers.map((answer, i) => (
                        <FormControlLabel
                          value={answer}
                          control={<Radio />}
                          label={answer}
                        />
                      ))}

                      <FormControlLabel
                        value={correct_answer}
                        control={<Radio />}
                        label={correct_answer}
                      />
                    </RadioGroup>
                  </FormControl>
                </CardContent>
              </Card>
            </CardWrapper>
          )
        )}

      <ButtonsWrapper>
        <ThemeProvider theme={theme}>
          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
            size="large"
          >
            Save
          </Button>
        </ThemeProvider>
      </ButtonsWrapper>
    </Container>
  );
};
