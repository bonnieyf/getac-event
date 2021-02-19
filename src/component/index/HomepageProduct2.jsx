import React, { useState, useEffect } from "react";
import ProdcutItem2 from "./ProductItem2";
import datas from "../../data/productData2.json";

import { useTranslation } from "react-i18next";

const HomepageProduct2 = (props) => {
  const [data, setData] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setData(datas);
    console.log(data);
  });

  return (
    <article class="content-tiles">
      <div class="gt-grid">
        <div class="gt-col-12">
          <h2>{t("homepageSection6.title")}</h2>
        </div>
      </div>
      <div class="gt-grid">
        {(data || []).map((val, id) => {
          console.log(val.src);
          return (
            <ProdcutItem2
              key={id}
              src={val.src}
              title={t(`homepageSection6.items.item${id + 1}.title`)}
              desc={t(`homepageSection6.items.item${id + 1}.desc`)}
            />
          );
        })}
      </div>
    </article>
  );
};

export default HomepageProduct2;
