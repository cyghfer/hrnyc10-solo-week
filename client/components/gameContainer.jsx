const mapStateToProps = (state) => ({
  mapList: state.mapList,
  gameName: state.gameName,
  map: state.map,
  day: state.day,
  currentTurn: state.currentTurn,
  board: state.board,
  countries: state.countries,
  units: state.units,
  router: state.router
});

const mapDispatchToProps = (dispatch) => Redux.bindActionCreators(actionCreators, dispatch);

const GameContainer = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(CurrentGame);

window.GameContainer = GameContainer;