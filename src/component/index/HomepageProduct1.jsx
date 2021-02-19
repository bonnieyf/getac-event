import React, { useState, useEffect } from "react";
import ProdcutItem from "./ProductItem";
import datas from "../../data/productData.json";
import { useTranslation } from "react-i18next";

const HomepageProduct1 = (props) => {
  const [data, setData] = useState(null);
  const { t, i18n } = useTranslation();

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
              title={t(`homepageSection3.items.item${id + 1}.title`)}
              desc={t(`homepageSection3.items.item${id + 1}.desc`)}
            />
          );
        })}
      </div>
    </article>
  );
};

export default HomepageProduct1;
