import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default () => {
  const Menu = styled.header`
    margin-bottom: 4rem;
  `;
  return (
    <Menu>
      <AppBar position="static">
        <Container>
          <Toolbar variant="dense">
            <Typography variant="h4" color="inherit">
              Quiz
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Menu>
  );
};
