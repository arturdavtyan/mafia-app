// Mutations

export default {
  SetWindowWidth(state, payload) {
    const width = parseInt(payload)

    if (width) {
      state.WindowWidth = width
    }
  }
}