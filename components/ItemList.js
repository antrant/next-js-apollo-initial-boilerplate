import {ListItemIcon, ListItemText, ListItem} from '@material-ui/core';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import Link from 'next/link';

const ItemList = () => (
  <div>
    <Link href="/">
      <ListItem button component="a">
        <ListItemIcon>
          <ViewListRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="TODO List" />
      </ListItem>
    </Link>
  </div>
);

export default ItemList;
