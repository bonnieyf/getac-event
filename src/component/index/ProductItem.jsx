const ProductItem = (props) => {
  return (
    <div class="teaser-content">
      <img src={props.src} width="224" height="164" alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default ProductItem;
