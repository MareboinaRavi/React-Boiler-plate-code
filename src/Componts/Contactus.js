import React from "react";
import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const Contactus = () => {
  const state = useSelector((state) => state);
  const user = state.users.filter((item) => item.id === state?.noOfMobiles);
  console.log(user, "state");
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({
      type: "GET_API",
      url: "https://jsonplaceholder.typicode.com/photos/1",
    });
    // setData(state?.receivedData);
    // console.log(state, "+++++++++++++++ from contact us");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Container>
        {JSON.stringify(state?.receivedData)}
        {user.length !== 0 ? (
          <>
            <h1>{user?.[0]?.name}</h1>
            <h2>{user?.[0]?.website}</h2>
            <h3>{user?.[0]?.phone}</h3>
            <h4>{user?.[0]?.username}</h4>
          </>
        ) : (
          <h1>No Data</h1>
        )}
        {/* <h5></h1> */}
        {user[0]?.name}
        {/* {data.length > 0 &&
          data.map((item) => (
            <div key={item.id}>
              <h1>{item.name}</h1>
            </div>
          ))} */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nobis.
        Debitis quos ullam quaerat perferendis laboriosam excepturi hic eaque
        assumenda officiis a, accusantium ratione ipsam, blanditiis atque cum
        tenetur repellat. A quis non pariatur aliquid error tempora sapiente
        quod rem neque quas temporibus voluptatibus provident, possimus placeat
        expedit incidunt fugit earum dolorem est ipsum dicta aliquam quos eaque
        molestias voluptatibus asperiores eligendi repellendus quasi, aperiam
        laudantium voluptatum neque! Esse necessitatibus dicta a vel accusantium
        earum molestias maiores iste, velit ut perferendis vero excepturi eum
        veniam fugiat tenetur dolore rerum. Nisi doloremque voluptas ducimus
        libero eos consectetur? Eos recusandae minima atque quis illum
        distinctio odit quidem, esse tempore maiores adipisci quam tenetur
        sapiente eaque voluptate repellat unde suscipit excepturi nobis nesciunt
        nulla doloremque accusamus numquam? Expedita quis neque nam, quaerat est
        repellat eligendi consequatur recusandae veritatis nihil vel voluptates
        voluptatibus. Natus libero ad, eveniet ipsa nihil obcaecati nostrum
        expedita omnis corporis quo praesentium pariatur quibusdam et
        consectetur. Consequuntur ratione officiis officia praesentium culpa,
        fugiat repellendus? Voluptatem nostrum aliquam tenetur ipsam cumque
        nihil molestiae qui ex, sed excepturi laudantium libero adipisci
        quaerat. Necessitatibus, animi. Quas ut distinctio nam laboriosam dolore
        consectetur a suscipit quisquam, veniam qui. Animi, sit odio!
      </Container>
    </div>
  );
};

export default Contactus;
