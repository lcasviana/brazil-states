(() => {
  let dir = {
    'abbreviation': true,
    'name': true,
    'region': true,
    'timeZone': true
  };

  initTable();
  setSort();

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

  function setSort() {
    const columns = $('th[id]');
    for (let i = 0; i < columns.length; i++)
      columns[i].onclick = () => sortTable(columns[i].id);
  }

  function sortTable(col) {
    states.sort((a, b) => {
      if (a[col] > b[col]) return +1 * (dir[col] ? 1 : -1);
      if (a[col] < b[col]) return -1 * (dir[col] ? 1 : -1);
      return 0;
    });
    dir[col] = !dir[col];

    $('table tbody').remove();
    $('table').append(`<tbody></tbody>`);
    initTable();
  }
})();