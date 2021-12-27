export const generateRandomIds = (ids, len = 4) => {
  const randomIds = new Set();
  while (randomIds.size < len) {
    const id = generateRandomId(ids);
    randomIds.add(id);
  }
  return [...randomIds];
};

export const generateRandomId = (ids) => {
  return ids[Math.floor(Math.random() * ids.length)];
};
