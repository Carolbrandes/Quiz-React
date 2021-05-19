import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

export default () => {
  const [result, setResult] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    setResult(JSON.parse(localStorage.getItem("result")));
  }, []);

  setTimeout(() => {
    setCorrect(
      result.filter((question) => question.answer === question.correct_answer)
        .length
    );
    setIncorrect(result.length - correct);
  }, 1000);

  const TitleWrapper = styled.div`
    margin-bottom: 2rem;
    text-align: center;
  `;

  return (
    <Container>
      <TitleWrapper>
        <Typography variant="h3" component="h1">
          Result
        </Typography>
      </TitleWrapper>

      <TableContainer component={Paper}>
        <Table aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Question</b>
              </TableCell>
              <TableCell align="right">
                <b>Your Answer</b>
              </TableCell>
              <TableCell align="right">
                <b>Correct Answer</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result &&
              result.map(({ question, answer, correct_answer }) => (
                <TableRow key={question}>
                  <TableCell>{question}</TableCell>
                  <TableCell align="right">{answer}</TableCell>
                  <TableCell align="right">{correct_answer}</TableCell>
                </TableRow>
              ))}

            <TableRow>
              <TableCell>
                <b>Total of answers</b>
              </TableCell>
              <TableCell>
                <b>{result.length}</b>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <b>Total of correct answers</b>
              </TableCell>
              <TableCell>
                <b>{correct}</b>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <b>Total of incorrect answers</b>
              </TableCell>
              <TableCell>
                <b>{incorrect}</b>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <b>Points</b>
              </TableCell>
              <TableCell>
                <b>{correct}</b>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
