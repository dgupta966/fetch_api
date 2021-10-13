// import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Product = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    // const resp = await res.json();
    setData(await res.json());
    //resp.map((e) => console.log(e.title));
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //   .then(res => res.json())
  //   .then(json => setData(json))
  //   // .then((res) => {
  //   //   setData(res.data)
  //   //  console.log(res.data)
  //   // })
  // },[])
  console.log(data);
  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* {data.map((e) => {
        <ul>
          <li key={e.id}>{e.title}</li>
        </ul>;
      })} */}
      {data?.map((e) => {
        return (
          <div>
            <a href={e.image}>
              <li keys={e.id}>{e.title}</li>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
