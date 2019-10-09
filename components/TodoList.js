import PropTypes from 'prop-types';
import {
  Paper,
  FormControlLabel,
  makeStyles,
  Checkbox,
  Button,
  Grid,
} from '@material-ui/core';

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
              <Button size="small" className={classes.deleteButton}>
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
