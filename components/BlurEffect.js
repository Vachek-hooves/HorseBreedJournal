import {StyleSheet, Text, View, Pressable, Dimensions} from 'react-native';
// import {BlurView} from '@react-native-community/blur';
import GeneralColors from '../constants/colors';

const {height} = Dimensions.get('window');

const BlurEffect = ({children, onPressProp}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPressProp}
        //   style={styles.pressableContainer}
        style={({pressed}) =>
          pressed
            ? [styles.pressableContainer, styles.pressed]
            : styles.pressableContainer
        }>
        {/* <Text style={styles.absolute}>Hi, I am some blurred text</Text> */}
        {/* in terms of positioning and zIndex-ing everything before the BlurView will be blurred */}
        {/* <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={1}
          reducedTransparencyFallbackColor="white"
        /> */}
        {/* <Text>
        I'm the non blurred text because I got rendered on top of the BlurView
    </Text> */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 42,
              fontWeight: 'bold',
              color: GeneralColors.maroon,
            }}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default BlurEffect;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF' + 90,
    borderRadius: 30,
    overflow: 'hidden',
    height: height * 0.6,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  pressableContainer: {
    flex: 1,
    // width:'100%'
  },
  pressed: {
    opacity: 0.6,
  },
});
