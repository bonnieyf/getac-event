import React, { useState, useEffect } from "react";
import ProdcutItem2 from "./ProductItem2";
import datas from "../../data/productData2.json";
const HomepageProduct2 = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(datas);
    console.log(data);
  });

  return (
    <article class="content-tiles">
      <div class="gt-grid">
        <div class="gt-col-12">
          <h2>Why choose getac?</h2>
        </div>
      </div>
      <div class="gt-grid">
        {(data || []).map((val, id) => {
          console.log(val.src);
          return (
            <ProdcutItem2
              key={id}
              src={val.src}
              title={val.title}
              desc={val.desc}
            ></ProdcutItem2>
          );
        })}
      </div>
    </article>
  );
};

export default HomepageProduct2;
