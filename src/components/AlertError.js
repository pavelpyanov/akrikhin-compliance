export const AlertError = (props) => {
  return (
    <div className="alert alert-danger" role="alert">
      {props.text}
    </div>
  );
};
