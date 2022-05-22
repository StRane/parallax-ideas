const ProjectComponent = (props) => {
  const classes =
    props.class +
    " grid bg-no-repeat bg-cover bg-center rounded-xl transition duration:300 hover:ease-in hover:blur-xs hover:scale-105";
  return <div class={classes}>{props.children}</div>;
};

export default ProjectComponent;
