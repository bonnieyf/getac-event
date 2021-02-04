import React, { useState, useEffect } from "react";
import ProdcutItem from "./ProductItem";
import datas from "./../../data/productData.json";
const HomepageProduct1 = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(datas);
    console.log(data);
  });

  return (
    <article class="teaser">
      <div class="gt-grid">
        {(data || []).map((val, id) => {
          console.log(val.src);
          return (
            <ProdcutItem
              key={id}
              src={val.src}
              title={val.title}
              desc={val.desc}
            ></ProdcutItem>
          );
        })}
      </div>
    </article>
  );
};

export default HomepageProduct1;
