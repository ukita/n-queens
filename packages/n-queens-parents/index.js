const parents = chromosomes => {
  const selectedParents = [];

  while (selectedParents.length < 2) {
    const random = Math.floor(Math.random() * chromosomes.length);
    const parent = chromosomes[random];

    if (!selectedParents.includes(parent)) {
      selectedParents.push(parent);
    }
  }

  return selectedParents;
};

module.exports = { parents };
