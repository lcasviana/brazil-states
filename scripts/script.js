(() => {
  initTable();

  function initTable() {
    states.forEach((state) => {
      $('table tbody')
        .append(`
          <tr>
            <td class="tc"> ${state.abbreviation} </td>
            <td> ${state.name} </td>
            <td> ${state.region} </td>
            <td class="tc"> ${state.timeZone} </td>
            <td class="tc">
              <img
                src="assets/images/${state.image}.png"
                alt="${state.name}"
                class="h1">
            </td>
          </tr>
          `);
    });
  }
})();