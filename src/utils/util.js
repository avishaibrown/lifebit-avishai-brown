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
      <>
        <p>{title}</p>
        <ul>
          {listArray.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </>
    );
  } else {
    return null;
  }
};
