// export default function Todos({ task, isDone }) {
//   if (isDone) {
//     return (
//       <li>
//         {task} {`=>`} Done
//       </li>
//     );
//   }
//   return (
//     <li>
//       {task} {`=>`} Work on it
//     </li>
//   );
// }

// export default function Todos({ task, isDone }) {
//   return (
//     <li>
//       {task} {` => `}
//       {isDone ? "Done" : "Work on it"}
//     </li>
//   );
// }

// export default function Todos({ task, isDone }) {
//   return (
//     <li>
//       {task} {` => `}
//       {isDone || "Work on it"}
//     </li>
//   );
// }

export default function Todos({ task, isDone }) {
    let listItem;

    if(isDone){
        listItem = <li>{`Finish  :`} {task}</li>
    }
    else{
        listItem = <li>Work on  : {task}</li>
    }
  return (
    listItem
  );
}
