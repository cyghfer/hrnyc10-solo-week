const populateMapList = (maps) => ({
  type: actionTypes.MAP_LIST_POPULATE,
  maps
});

const setGameName = (gameName) => ({
  type: actionTypes.GAME_NAME_SET,
  gameName
});

const setMap = (map) => ({
  type: actionTypes.MAP_SET,
  map
});

const setBoard = (board) => ({
  type: actionTypes.BOARD_SET,
  board
});

const incrementDay = (day) => ({
  type: actionTypes.DAY_INCREMENT,
  day
});

const changeCurrentTurn = (countryName) => ({
  type: actionTypes.CURRENT_TURN_CHANGE,
  countryName
});

const receiveIncome = (income) => ({
  type: actionTypes.INCOME_RECEIVE,
  income
});

const buildUnit = (unitType) => ({
  type: actionTypes.UNIT_BUILD,
  unitType
});

const destroyUnit = (index) => ({
  type: actionTypes.UNIT_DESTROY,
  index
})

const moveUnit = (position) => ({
  type: actionTypes.UNIT_MOVE,
  position
});

const incrementHp = (gain) => ({
  type: actionTypes.HP_INCREMENT,
  gain
});

const decrementHp = (loss) => ({
  type: actionTypes.HP_DECREMENT,
  loss
});

const incrementAmmo = (gain) => ({
  type: actionTypes.AMMO_INCREMENT,
  gain
})

const decrementAmmo = (loss) => ({
  type: actionTypes.AMMO_DECREMENT,
  loss
});

const incrementFuel = (gain) => ({
  type: actionTypes.FUEL_INCREMENT,
  gain
});

const decrementFuel = (loss) => ({
  type: actionTypes.FUEL_DECREMENT,
  loss
});

const incrementIncome = (gain) => ({
  type: actionTypes.INCOME_INCREMENT,
  gain
});

const decrementIncome = (loss) => ({
  type: actionTypes.INCOME_DECREMENT,
  loss
});

const captureProperty = (unitHp) => ({
  type: actionTypes.PROPERTY_CAPTURE,
  unitHp
});

window.actionCreators = {
  populateMapList,
  setGameName,
  setMap,
  setBoard,
  incrementDay,
  changeCurrentTurn,
  receiveIncome,
  buildUnit,
  destroyUnit,
  moveUnit,
  incrementHp,
  decrementHp,
  incrementAmmo,
  decrementAmmo,
  incrementFuel,
  decrementFuel,
  incrementIncome,
  decrementIncome,
  captureProperty
}