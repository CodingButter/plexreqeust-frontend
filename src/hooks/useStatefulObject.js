import { useState } from "react";
let statefulStorage = {};

const manageStatefulObject = ({
  storedObject = {},
  reference,
  action,
  myUseState,
}) => {
  const difObject = {};
  Object.keys(reference).forEach((objkey) => {
    const objKeyValue = reference[objkey];
    if (typeof objKeyValue === "object") {
      difObject[objkey] = manageStatefulObject({
        storedObject: storedObject[objkey],
        objKeyValue,
        action,
      });
    } else {
      storedObject[objkey] = objKeyValue;
    }

    switch (action) {
      case "update":
        if (storedObject[objkey].state !== objKeyValue) {
          storedObject[objkey].updateState(objKeyValue);
        }
        break;

      case "values":
        difObject[objkey] = storedObject[objkey];
        break;

      default:
        difObject[objkey] = storedObject[objkey];
        break;
    }
    // }
  });
  return difObject;
};


  const [stateObj, updateStateObj] = useState(() =>
    manageStatefulObject({
      reference,
      action: "values",
    })
  );

  const updateStatefulObject = (reference) =>
    updateStateObj((previousVal) => {
      return {
        ...previousVal,
        ...manageStatefulObject({
          previousVal,
          reference,
          action: "values",
        }),
      };
    });

  return [stateObj, updateStatefulObject];
};
