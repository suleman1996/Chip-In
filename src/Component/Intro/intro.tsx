import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Platform, ImageBackground, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../../utilis/Themes/Colors/colors';
import styles from './intro.style';

const Introo: React.FC<any> = ({ data, renderNextButton, renderDoneButton, onSkip, onDone, onSlideChange }) => {
  let slider  = AppIntroSlider || undefined ;
  const renderItem = ({ item }:any) => {
    return (
      <>
        <View style={styles.mainView}>
          {/* <TouchableOpacity onPress={() => slider?.goToSlide(2, true)} style={styles.skip}>
            <Text style={styles.textskip}>Skip</Text>
          </TouchableOpacity> */}
          <Image source={item.image} style={styles.image} resizeMode='contain'/>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title1}>{item.title1}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </>
    );
  };
  return (
    <>
      <AppIntroSlider
        ref={(ref:any) => (slider = ref!)}
        data={data}
        activeDotStyle={{ backgroundColor: colors.navy, height: 8, width: 8 }}
        dotStyle={{ backgroundColor: colors.darkGreen, width: 8, height: 8 }}
        renderItem={renderItem}
        onSkip={onSkip}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        onSlideChange={onSlideChange}
        onDone={onDone}
        showNextButton={true}
        showSkipButton={false}
        showDoneButton={true}
        bottomButton
      />
    </>
  );
};
export default Introo;
