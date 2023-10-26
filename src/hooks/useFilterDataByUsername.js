
function useFilterArrayByUserName(inputArray, usernameToFilter) {
  const filteredData = inputArray.filter(
    item => item.createdBy.username === usernameToFilter
  );

  return filteredData;
}

export default useFilterArrayByUserName;
