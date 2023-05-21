function Poster() {
  return (
    <div className="wrapper-poster">
      <div className="wrapper-title-poster">
        <div className="text-semi-56">Borsud Christmas</div>
        <div className="wrapper-share">
          <div className="text-reg-36">tmo26x</div>
          <div className="wrapper-icon">
            <img src="/img/link.svg" />
          </div>
        </div>
      </div>

      <div className="wrapper-detail-poster">
        <div className="wrapper-inform-poster">
          <div className="wrapper-inform-poster-small">
            <div className="text-semi-24 title">Date rage</div>
            <div className="text-reg-24">10 - 30 May 2050</div>
          </div>
          <div className="wrapper-inform-poster-small">
            <div className="text-semi-24 title">Budget for a gift</div>
            <div className="text-reg-24">800 - 1,000 baht</div>
          </div>
          <div className="wrapper-inform-poster-small">
            <div className="text-semi-24 title">Detail</div>
            <div className="text-reg-24">Sea theme</div>
          </div>
        </div>

        <img src="/img/memberNames.png" width="90%" />

        <div className="wrapper-save">
          <div className="text-reg-20 save">
            The poster shows members initials and their chosen colors.
          </div>
          <div id="sc-small-button">
            <div className="text-semi-24 center">Save poster</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poster;
