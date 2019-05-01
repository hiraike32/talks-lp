export const getTotalCountByPagedJson = (pagedJson: any[][]): number => {
  return (
    (pagedJson.length - 1) * pagedJson[0].length +
    pagedJson[pagedJson.length - 1].length
  );
};
