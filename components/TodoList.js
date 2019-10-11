import PropTypes from 'prop-types';
import {
  Paper,
  FormControlLabel,
  makeStyles,
  Checkbox,
  Button,
  Grid,
} from '@material-ui/core';
import {useMutation} from '@apollo/react-hooks';
import {DELETE_TODO, GET_TODOS} from '../document-nodes/todo';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 2),
    marginBottom: theme.spacing(1),
  },
  deleteButton: {
    marginTop: theme.spacing(1),
  },
}));

const TodoList = ({todos}) => {
  const classes = useStyles();

  const [deleteTodo] = useMutation(DELETE_TODO);

  return (
    <>
      {todos.map((todo) => (
        <Paper key={todo.id} className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={10}>
              <FormControlLabel
                value={todo.title}
                control={<Checkbox color="primary"/>}
                label={todo.title}
                labelPlacement="end"
                checked={todo.completed}
              />
            </Grid>
            <Grid item xs={2}>
              <Button size="small"
                className={classes.deleteButton}
                onClick={(event) => {
                  deleteTodo({
                    variables: {
                      where: {
                        id: todo.id,
                      },
                    },
                    update(cache) {
                      let {todos} = cache.readQuery({query: GET_TODOS});

                      todos = todos.filter((t) => (t.id !== todo.id));

                      cache.writeQuery({
                        query: GET_TODOS,
                        data: {todos},
                      });
                    },
                  });
                }}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
