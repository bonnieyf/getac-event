const ProductItem = (props) => {
  return (
    <section>
      <img src={props.src} width="164" height="100" alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </section>
  );
};

export default ProductItem;
