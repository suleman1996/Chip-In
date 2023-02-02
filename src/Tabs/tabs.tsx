import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
// import { ContractIcon, HolidayIcon, HomeIcon, PaymentIcon, PlusIcon } from "../Assets/svgs/tab/tab";
import CustomTabBarButton from "../Component/CustomTabBarButton/customTabButton";
import { createStackNavigator } from '@react-navigation/stack';
import colors from "../utilis/Themes/Colors/colors";
import HomePage from "./Homepage/homepage";
import Contracts from "./Contracts/contracts";
import Payments from "./Payments/payment";
import ProfileScreen from "../Screens/ProfileScreen/profilescreen";
import CreateLoan from "./CreateLoan/createloan";
import PlusIcon from '../Assets/svgs/tab/plus'
import styles from "./tabs.style";

const Tab = createBottomTabNavigator();
const stack = createStackNavigator();

const HomeScreen = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 20 }}>Coming Soon</Text>
        </View>
    )
}
const ProfileNav = () => {
    return (
        <stack.Navigator>
            <stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
            <stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
            {/* <stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} /> */}
        </stack.Navigator>
    )
}

const Tabs = () => {


    return (
        <Tab.Navigator
            screenOptions={
                {
                    tabBarShowLabel: false,
                    tabBarStyle: [
                        {
                            display: "flex",
                            backgroundColor: colors.navy,
                            position: 'absolute',
                            bottom: 10,
                            left: 20,
                            right: 20,
                            elevation: 0,
                            height: 80,
                            borderRadius: 15,
                            borderTopWidth: 0,
                            ...styles.shadow
                        },
                        null
                    ]
                }

            }>

            <Tab.Screen name="Home" component={ProfileNav} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabView}>
                        {/* <HomeIcon fillColor={focused ? colors.darkGreen : colors.lightGreen} /> */}
                        <Text
                            style={{ color: focused ? colors.darkGreen : colors.lightGreen, fontSize: 12 }}>
                            Home
                        </Text>
                    </View>
                ),
            }}

            />

            <Tab.Screen name="Payments" component={Payments} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabView}>
                        {/* <PaymentIcon fillColor={focused ? colors.darkGreen : colors.lightGreen} /> */}
                        <Text style={{ color: focused ? colors.darkGreen : colors.lightGreen, fontSize: 12 }}>
                            Payments
                        </Text>
                    </View>
                ),
            }} />

            <Tab.Screen name="Add" component={CreateLoan} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <PlusIcon/>
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }} />

            <Tab.Screen name="Contarcts" component={Contracts} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabView}>
                        {/* <ContractIcon fillColor={focused ? colors.darkGreen : colors.lightGreen} /> */}
                        <Text
                            style={{ color: focused ? colors.darkGreen : colors.lightGreen, fontSize: 12 }}>
                            Contracts
                        </Text>
                    </View>
                ),

            }} />

            <Tab.Screen name="Holiday" component={HomeScreen} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabView}>
                        {/* <HolidayIcon fillColor={focused ? colors.darkGreen : colors.lightGreen} /> */}
                        <Text
                            style={{ color: focused ? colors.darkGreen : colors.lightGreen, fontSize: 12 }}>
                            Holiday
                        </Text>
                    </View>
                ),
            }} />

        </Tab.Navigator>
    )
}

export default Tabs