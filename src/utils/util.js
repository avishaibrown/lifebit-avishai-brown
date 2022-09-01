import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { NOT_AVAILABLE } from "./constants";

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const buildArray = (str) => {
  if (str && str !== NOT_AVAILABLE) {
    return str.split(", ");
  } else {
    return str;
  }
};

export const buildList = (listArray, title) => {
  if (listArray && listArray !== NOT_AVAILABLE) {
    return (
      <List sx={{ width: "100%" }}>
        <Typography align={"left"} fontSize={14} color={"gray"}>
          {title}
        </Typography>
        {listArray.map((value, index) => (
          <ListItem
            key={index}
            dense={true}
            align={"left"}
            disablePadding={true}
            sx={{ color: "white", fontSize: "14" }}
          >
            <ListItemText primary={value} />
          </ListItem>
        ))}
      </List>
    );
  } else {
    return null;
  }
};
