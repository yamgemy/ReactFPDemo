import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {TabView} from 'react-native-tab-view';
import ProgressTabList from '../../components/ProgressTabList';
import useHomeRoutes from '../../hooks/tabRoutesHooks/useHomeRoutes';
import {useSelector, useDispatch} from 'react-redux';
import {clearFact, fetchFact} from '../../store/actions/factActions';
import FactModal from '../../components/FactModal';

export default () => {
  const {routes, index, setIndex} = useHomeRoutes();

  const dispatch = useDispatch();

  const {
    foundationItems = [],
    discoveryItems = [],
    deliveryItems = [],
    fact = '',
  } = useSelector(({progressReducer, factReducer}) => {
    const keys = Object.keys(progressReducer);
    return {
      foundationItems: progressReducer[keys[0]],
      discoveryItems: progressReducer[keys[1]],
      deliveryItems: progressReducer[keys[2]],
      fact: factReducer.fact,
    };
  });

  const goToNext = (nextTabIndex, jumpTo) => {
    if (nextTabIndex <= routes.length - 1) {
      const key = routes[nextTabIndex].key;
      jumpTo(key);
    } else {
      dispatch(fetchFact());
    }
  };

  const closeModal = () => {
    dispatch(clearFact());
  };

  const goBack = (tabIndex, jumpTo) => {
    const key = routes[tabIndex - 1].key;
    jumpTo(key);
  };

  const renderScene = useCallback(
    ({route, jumpTo}) => {
      switch (route.key) {
        case 'foundation':
          return (
            <ProgressTabList
              title={route.title}
              tabIndex={routes.indexOf(route)}
              tabItems={foundationItems}
              onNextPressed={nextTabIndex => goToNext(nextTabIndex, jumpTo)}
              goBack={tabIndex => goBack(tabIndex, jumpTo)}
            />
          );
        case 'discovery':
          return (
            <ProgressTabList
              title={route.title}
              tabIndex={routes.indexOf(route)}
              tabItems={discoveryItems}
              onNextPressed={nextTabIndex => goToNext(nextTabIndex, jumpTo)}
              goBack={tabIndex => goBack(tabIndex, jumpTo)}
            />
          );
        case 'delivery':
          return (
            <ProgressTabList
              title={route.title}
              tabIndex={routes.indexOf(route)}
              tabItems={deliveryItems}
              onNextPressed={nextTabIndex => goToNext(nextTabIndex, jumpTo)}
              goBack={tabIndex => goBack(tabIndex, jumpTo)}
              isLastTab
            />
          );
      }
    },
    [routes, foundationItems, discoveryItems, deliveryItems],
  );

  return (
    <View style={sty.container}>
      <TabView
        swipeEnabled={false}
        renderTabBar={() => null}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
      <FactModal
        isVisible={fact !== ''}
        payload={fact}
        closeModal={closeModal}
      />
    </View>
  );
};

const sty = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
