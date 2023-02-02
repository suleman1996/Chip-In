import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import Introo from '../../Component/Intro/intro';
import colors from '../../utilis/Themes/Colors/colors';
// import Tabs from '../../BottomTab/Tab/tab';
import styles from './intro.style';

const Intro: React.FC<any> = ({ navigation }) => {
  const [show, setShow] = useState(false);
  //   const renderNextButton = () => {
  //     return (
  //       <>
  //         <View style={styles.renderNextButton}>
  //           <Text style={styles.rendertext}>Continue</Text>
  //         </View>
  //         <View style={styles.bottomview}>
  //           <Text style={styles.rendertext2}>Already have an account?</Text>
  //           <TouchableOpacity onPress={() => navigation.replace('login')} style={styles.renderview}>
  //             <Text style={styles.rendertext3}>Login</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </>
  //     );
  //   };
  //   const onSkip = () => {
  //     setShow(true);
  //   };

  const renderDoneButton = () => {
    return (
      <View>
        <TouchableOpacity
          style={styles.renderNextButton}
          onPress={() => navigation.replace('signin')}>
          <Text style={styles.rendertext}>Get Started</Text>
        </TouchableOpacity>
        {/* <View style={styles.bottomview}>
          <Text style={styles.rendertext2}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.replace('login')}
            style={styles.renderview}>
            <Text style={styles.rendertext3}>Login</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  };


  return (
    <View style={styles.safeareaview}>
      <StatusBar barStyle="light-content" backgroundColor={colors.lightGreen} />
      {show ? (
        <Text>hello</Text>
        // <Tabs />
      ) : (
        <Introo
          data={slides}
          //   renderNextButton={renderNextButton}
          //   onSkip={onSkip}
          renderDoneButton={renderDoneButton}
          showNextButton={true}
          goToSlide
        />
      )}
    </View>
  );
};
const slides = [
  {
    key: 's1',
    title: 'Welcome to',
    title1: ' Chipkie',
    text: 'Lörem ipsum makrokrode regulig karen.\n Pronafubel furen vahid i irade,\n bådoren. Niska lådvinsalkoholism.\n Homortad nerat, ip-tv polyr. ',
    image: require('../../Assets/svgs/intro/intro1.png'),
    // ImageBackground: require('../../Assets/Intro/background.png'),
    TouchableOpacity: TouchableOpacity,
  },
  {
    key: 's2',
    title: 'Welcome to',
    title1: ' Chipkie',
    text: 'Lörem ipsum makrokrode regulig karen.\n Pronafubel furen vahid i irade,\n bådoren. Niska lådvinsalkoholism.\n Homortad nerat, ip-tv polyr. ',
    image: require('../../Assets/svgs/intro/intro1.png'),
    // ImageBackground: require('../../Assets/Intro/background.png'),
    TouchableOpacity: TouchableOpacity,
  },
  {
    key: 's3',
    title: 'Welcome to',
    title1: ' Chipkie',
    text: 'Lörem ipsum makrokrode regulig karen.\n Pronafubel furen vahid i irade,\n bådoren. Niska lådvinsalkoholism.\n Homortad nerat, ip-tv polyr. ',
    image: require('../../Assets/svgs/intro/intro1.png'),
    // ImageBackground: require('../../Assets/Intro/background.png'),
    TouchableOpacity: TouchableOpacity,
  },
];
export default Intro;
