import {ListItemIcon, ListItemText, ListItem} from '@material-ui/core';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
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
    <Link href="/about">
      <ListItem button component="a">
        <ListItemIcon>
          <InfoRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </Link>
  </div>
);

export default ItemList;
