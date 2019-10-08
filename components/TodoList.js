import PropTypes from 'prop-types';
import {Paper, FormControlLabel, makeStyles, Checkbox} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 2),
    marginBottom: theme.spacing(1),
  },
}));

const TodoList = ({todos}) => {
  const classes = useStyles();

  return (
    <>
      {todos.map((todo) => (
        <Paper key={todo.id} className={classes.root}>
          <FormControlLabel
            value={todo.title}
            control={<Checkbox color="primary" />}
            label={todo.title}
            labelPlacement="end"
          />
        </Paper>
      ))}
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
