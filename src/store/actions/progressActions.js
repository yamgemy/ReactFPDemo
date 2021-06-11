// export const updateHeaderTick = tabIndex => {
//   return {
//     type: 'UPDATEHEADERTICK',
//     tabIndex: tabIndex,
//   };
// };

export const updateItemTick = (tabKey, itemIndex) => {
  return {
    type: 'UPDATEITEMTICK',
    tabKey: tabKey,
    itemIndex: itemIndex,
  };
};
