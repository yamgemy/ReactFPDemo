import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TickedTextHeader from './TickedTextHeader';
import {useDispatch} from 'react-redux';
import CheckedTextItem from './CheckedTextItem';
import {updateItemTick} from '../store/actions/progressActions';
import {BackArrow} from '../assets';

export default React.memo(
  ({
    title,
    items,
    tabIndex,
    tabItems,
    onNextPressed,
    isLastTab = false,
    goBack,
  }) => {
    const dispatch = useDispatch();

    const onCheckBoxClicked = itemIndex => {
      dispatch(updateItemTick(title.toLowerCase(), itemIndex));
    };

    const isListCompleted =
      tabItems.filter(i => i.ticked).length === tabItems.length;

    const btnText = isLastTab ? 'Finish' : 'Next Phase';

    return (
      <View style={sty.container}>
        <If condition={tabIndex > 0}>
          <TouchableOpacity
            style={sty.backArrow}
            onPress={() => goBack(tabIndex)}>
            <BackArrow />
          </TouchableOpacity>
        </If>
        <TickedTextHeader
          title={title}
          items={items}
          tabIndex={tabIndex}
          isTicked={isListCompleted}
        />
        <ScrollView style={sty.scrollView}>
          <If condition={tabItems.length > 0}>
            {tabItems.map((item, index) => {
              return (
                <View key={index.toString()}>
                  <CheckedTextItem
                    onCheckBoxClicked={() => onCheckBoxClicked(index)}
                    progressTab={title.toLowerCase()}
                    title={item.name}
                    itemIndex={index}
                    isChecked={item.ticked}
                  />
                </View>
              );
            })}
          </If>
        </ScrollView>
        <TouchableOpacity
          disabled={!isListCompleted}
          activeOpacity={'75%'}
          onPress={() => onNextPressed(tabIndex + 1)}>
          <View
            style={[
              sty.nextBtn,
              {backgroundColor: isListCompleted ? '#c7eb4c' : '#C0C0C0'},
            ]}>
            <Text>{btnText}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  },
  (prev, next) => {
    const prevTicks = prev.tabItems.filter(i => i.ticked).length;
    const nextTicks = next.tabItems.filter(i => i.ticked).length;
    return prevTicks !== nextTicks ? false : true;
  },
);

const sty = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'beige',
  },
  scrollView: {
    flex: 1,
  },
  nextBtn: {
    width: '100%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    position: 'absolute',
    top: 50,
    left: 4,
    zIndex: 10,
  },
});
