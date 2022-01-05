// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { useEffect } from "react";
// import { viewUsersAction } from "../redux";
// import { useSelector, useDispatch } from "react-redux";

// // function createData(name, calories, fat) {
// //   return { name, calories, fat };
// // }

// // const rows = [createData("Frozen yoghurt", 159, 100)];

// const BasicTable = () => {
//   const users = useSelector((state) => state.user.userInfo);
//   console.log("======users in table======", users);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!users.length) {
//       dispatch(viewUsersAction());
//     }
//   }, [users]);

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell align="right">CatchPhrase</TableCell>
//             <TableCell align="right">Bs</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {users.company.map((user) => (
//             <TableRow
//               key={user.name}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {user.name}
//               </TableCell>
//               <TableCell align="right">{user.catchPhrase}</TableCell>
//               <TableCell align="right">{user.bs}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };
// export default BasicTable;
