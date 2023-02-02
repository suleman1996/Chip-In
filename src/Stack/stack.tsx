import React from 'react';
import { LogBox } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Intro from '../Screens/Intro/intro';
import Signin from '../Screens/SignIn/signin';
import Signup from '../Screens/SignUp/signup';
import Tabs from '../Tabs/tabs';
import ForgotPassword from '../Screens/ForgotPassword/forgotpassword';
import CreateLoanSteps from '../Screens/CreateLoanSteps/createloansteps';
import LoanStep2 from '../Screens/CreateLoanSteps/LoanStep2/loanstep2';
import LoanStep3 from '../Screens/CreateLoanSteps/LoanStep3/loanstep3';
import LoanStep5 from '../Screens/CreateLoanSteps/LoanStep5/loanstep5';
import { closeConfig, config } from '../utilis/Animations/animation';

LogBox.ignoreAllLogs();

const Stack: React.FC<any> = () => {

   const stack = createStackNavigator();

    return (
        <stack.Navigator screenOptions={{
            gestureEnabled: false,
            transitionSpec:{open:config,close:closeConfig},cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
        }}>
            <stack.Screen name="intro" component={Intro} options={{ headerShown: false }} />
            <stack.Screen name="signin" component={Signin} options={{ headerShown: false }} />
            <stack.Screen name="forgotpassword" component={ForgotPassword} options={{ headerShown: false, }} />
            <stack.Screen name="signup" component={Signup} options={{ headerShown: false, }} />
            <stack.Screen name="createloansteps" component={CreateLoanSteps} options={{ headerShown: false, }} />
            <stack.Screen name="loanstep2" component={LoanStep2} options={{ headerShown: false, }} />
            <stack.Screen name="loanstep3" component={LoanStep3} options={{ headerShown: false, }} />
            <stack.Screen name="loanstep5" component={LoanStep5} options={{ headerShown: false, }} />
            <stack.Screen name="tab" component={Tabs} options={{ headerShown: false }} />
        </stack.Navigator>
    );
};

export default Stack;
