import {ListItemIcon, ListItemText, ListItem} from '@material-ui/core';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Link from 'next/link';

const ItemList = () => (
  <div>
    <Link href="/todo-list">
      <ListItem button component="a">
        <ListItemIcon>
          <ViewListRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Ranking" />
      </ListItem>
    </Link>
    <Link href="/create-todo">
      <ListItem button component="a">
        <ListItemIcon>
          <AddCircleRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Tournament" />
      </ListItem>
    </Link>
  </div>
);

export default ItemList;
