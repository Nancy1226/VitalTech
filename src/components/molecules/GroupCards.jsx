function GroupCards({title, info, porcentaje}) {

    


    return (
      <>
        <div class="status">
          <div class="info">
            <h3>{title}</h3>
            <h1 class="h1-card">{info}</h1>
          </div>
          <div class="progresss">
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div class="percentage">

              <p>{porcentaje}</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default GroupCards;