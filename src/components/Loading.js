export const Loading = (props) => {
  return (
    <div className="text-center text-primary">
      <div className="spinner-border" style={props.size} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
