export function someMutation(/* state */) {}

export function toogleSideMenu(state) {
  state.isSideMenuOpen = !state.isSideMenuOpen;
}
