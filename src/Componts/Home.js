import React from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
// import {
//   buyMobile,
//   sellMobile,
//   getAllUsers,
//   getSingleUser,
//   addUser,
//   editUser,
//   deleteUser,
// } from "../Redux/actions/mobileaction";

const MobileDetails = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const styles = {
    btn: {
      padding: 30,
      margin: 10,
      borderRadius: 10,
      border: 0,
      color: "coral",
      backgroundColor: "black",
      cursor: "pointer",
    },
  };

  return (
    <Container>
      <div>
        <h1>
          {state.noOfMobiles}
          and Users {state.users.length} and Details {state.user.name}
        </h1>
        <button
          style={styles.btn}
          onClick={() => {
            dispatch({ type: "BUY_MOBILE" });
          }}
        >
          Buy Mobile
        </button>
        <button
          style={styles.btn}
          onClick={() => dispatch({ type: "SELL_MOBILE" })}
        >
          Sell Mobile
        </button>
        <button
          style={styles.btn}
          onClick={() =>
            dispatch({
              type: "GET_ALL_USERS",
              url: "https://jsonplaceholder.typicode.com/users",
            })
          }
        >
          Get All Users
        </button>
        {state.users.length > 0 ? (
          <table id="customers">
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Website</th>
            </tr>
            {state.users.map((item, index) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.website}</td>
              </tr>
            ))}
          </table>
        ) : (
          <h1>{JSON.stringify(state?.message)}</h1>
        )}
      </div>
    </Container>
  );
};
export default MobileDetails;
