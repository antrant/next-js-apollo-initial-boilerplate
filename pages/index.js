import gql from 'graphql-tag';
import {
  TextField,
  makeStyles,
  Typography,
  Fab,
  Container,
} from '@material-ui/core';
import clsx from 'clsx';
import AddIcon from '@material-ui/icons/Add';

import TodoList from '../components/TodoList';

// Query
const TODOS = gql`
    query {
        todos {
            id
            title
        }
    }
`;

// Styles
const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: theme.spacing(55),
    maxWidth: theme.spacing(55),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  fab: {
    margin: theme.spacing(1),
  },
}));

const Index = ({loading, error, data}) => {
  const {todos} = data;

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error!</Typography>;
  }

  const classes = useStyles();

  return (
    <Container maxWidth={'sm'}>
      <TextField
        id="outlined-dense"
        label="Input task title"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon/>
      </Fab>
      <TodoList todos={todos}/>
    </Container>
  );
};

Index.getInitialProps = ({apolloClient}) => {
  return apolloClient.query({query: TODOS});
};

export default Index;
