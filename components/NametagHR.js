function NametagHR({ text }) {
  return (
    <div className="nametag red-bg">
      <div className="text-reg-24 black name">{text}</div>
      <img src="/img/cancle.svg" />
    </div>
  );
}

export default NametagHR;
