import {
  TextField,
  makeStyles,
  Typography,
  Fab,
  Container,
} from '@material-ui/core';
import clsx from 'clsx';
import AddIcon from '@material-ui/icons/Add';
import {useMutation, useQuery} from '@apollo/react-hooks';

import TodoList from '../components/TodoList';
import {useState} from 'react';
import {ADD_TODO, GET_TODOS} from '../document-nodes/todo';

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

const Index = () => {
  const classes = useStyles();
  const {loading, error, data} = useQuery(GET_TODOS);
  const [title, setTitle] = useState('');

  const [addTodo] = useMutation(ADD_TODO, {
    update(cache, {data: {createTodo}}) {
      const {todos} = cache.readQuery({query: GET_TODOS});

      cache.writeQuery({
        query: GET_TODOS,
        data: {todos: [...todos, createTodo]},
      });
    },
  });

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error!</Typography>;
  }

  const {todos} = data;

  return (
    <Container maxWidth={'sm'}>
      <form onSubmit={(event) => {
        event.preventDefault();

        if (title) {
          addTodo({
            variables: {
              data: {
                title,
              },
            },
          });

          setTitle('');
        }
      }}>
        <TextField
          id="outlined-dense"
          label="Input task title"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
        />
        <Fab color="primary"
          aria-label="add"
          className={classes.fab}
          type={'submit'}>
          <AddIcon/>
        </Fab>
      </form>
      <TodoList todos={todos}/>
    </Container>
  );
};

// Index.getInitialProps = ({apolloClient}) => {
//   return apolloClient.query({query: GET_TODOS});
// };

export default Index;
