import { Link } from "react-router-dom";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

export default () => {
  const Menu = styled.header`
    margin-bottom: 4rem;

    .flex-between {
      display: flex;
      justify-content: space-between;
    }
  `;
  return (
    <Menu>
      <AppBar position="static">
        <Container>
          <Toolbar className="flex-between" variant="dense">
            <Typography variant="h4" color="inherit">
              Quiz
            </Typography>

            {window.location.pathname.includes("questions") ? (
              <Link to="/">
                <Button variant="contained" color="secondary">
                  Cancel
                </Button>
              </Link>
            ) : (
              ""
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Menu>
  );
};
