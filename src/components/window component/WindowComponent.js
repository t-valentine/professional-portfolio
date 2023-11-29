import "./WindowComponent.css";

function WindowComponent({ title, content }) {
  return (
    <div className="exterior">
      <div className="title-bar">
        <div>
          <p>Icon</p>
          <p>{title}</p>
        </div>
        <div>
          <p className="title-buttons">minimize</p>
          <p className="title-buttons">maximize</p>
          <p className="title-buttons">close</p>
        </div>
      </div>
      <div className="interior">{content}</div>
    </div>
  );
}

export default WindowComponent;
