const initState = {
  foundation: [
    {ticked: false, name: 'Setup virtual office'},
    {ticked: false, name: 'Set mission & vision'},
    {ticked: false, name: 'Select business name'},
    {ticked: false, name: 'Buy domains'},
  ],
  discovery: [
    {ticked: false, name: 'Create roadmap'},
    {ticked: false, name: 'Competitor analysis'},
  ],
  delivery: [
    {ticked: false, name: 'Release marketing website'},
    {ticked: false, name: 'Release MVP'},
  ],
};

export const progressReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATEITEMTICK':
      const targetTab = {...state}[action.tabKey];

      const updatedObject = {
        ...targetTab[action.itemIndex],
        ticked: !targetTab[action.itemIndex].ticked,
      };

      const updatedTab = [
        ...targetTab.slice(0, action.itemIndex),
        updatedObject,
        ...targetTab.slice(action.itemIndex + 1),
      ];

      return {
        ...state,
        [action.tabKey]: updatedTab,
      };

    default:
      return state;
  }
};
