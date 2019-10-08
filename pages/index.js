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
import {useMutation} from '@apollo/react-hooks';

import TodoList from '../components/TodoList';

// Queries
const GET_TODOS = gql`
    query {
        todos {
            id
            title
        }
    }
`;

// Mutations
const ADD_TODO = gql`
    mutation CreateTodo($data: JSON){
        createTodo(data: $data){
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

  let formElements = {};

  const setFormElements = (node) => {
    formElements[node.name] = node;
  };

  const getFormData = () => {
    let formData = {};

    for (let [name, element] of Object.entries(formElements)) {
      formData[name] = element.value;
    }

    return formData;
  };

  const [addTodo, {data: resData}] = useMutation(ADD_TODO);

  return (
    <Container maxWidth={'sm'}>
      <form onSubmit={(event) => {
        addTodo({variables: {data: getFormData()}});
        formElements['title'].value = '';
        event.preventDefault();
      }}>
        <TextField
          id="outlined-dense"
          label="Input task title"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          name='title'
          ref={setFormElements}
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

Index.getInitialProps = ({apolloClient}) => {
  return apolloClient.query({query: GET_TODOS});
};

export default Index;
