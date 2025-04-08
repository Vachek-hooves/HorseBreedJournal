import {StyleSheet, Text, View} from 'react-native';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import GeneralColors from '../../constants/colors';

const DropDownFilter = ({selected, data}) => {
  return (
    <View>
      <MultipleSelectList
        setSelected={value => selected(value)}
        data={data}
        save="value"
        label="Filter by region"
        placeholder="Choose region"
        dropdownItemStyles={{color: GeneralColors.lightOrange}}
        dropdownTextStyles={{
          color: GeneralColors.maroon,
          fontSize: 18,
          fontWeight: 'bold',
        }}
        dropdownStyles={{backgroundColor: '#a7c7cb'}}
        checkBoxStyles={{
          color: GeneralColors.lightOrange,
          // backgroundColor: GeneralColors.maroon,
        }}
        // disabledCheckBoxStyles={{
        //   backgroundColor: GeneralColors.lightOrange,
        //   color: 'pink',
        // }}
        badgeTextStyles={{color: 'black'}}
        maxHeight={300}
      />
    </View>
  );
};

export default DropDownFilter;

const styles = StyleSheet.create({});
