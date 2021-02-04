const ArticleComponent = (props) => {
  return (
    <div class="gt-grid">
      <div class="gt-col-12">
        <article class="copy-centered">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </article>
      </div>
    </div>
  );
};

export default ArticleComponent;
