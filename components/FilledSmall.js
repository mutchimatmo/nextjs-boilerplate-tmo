function FilledSmall({ title, text, icon }) {
  return (
    <div id="f-small-inform">
      <div id="f-small-inform-wrapper">
        <div className="text-reg-16">{title}</div>
        <div className="text-semi-20">{text}</div>
      </div>
      <img src={icon} width="15%" />
    </div>
  );
}

export default FilledSmall;
