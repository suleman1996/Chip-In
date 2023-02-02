import React, { useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { Calendar } from 'react-native-calendars';
import Button from '../../../../Component/Button/button';
import colors from '../../../../utilis/Themes/Colors/colors';

import styles from './calender.style'

const Calender: React.FC<any> = ({ onCancel, selectedDate, setSelectedDate }: any) => {

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Calendar
                // Initially visible month. Default = now
                // initialDate={selectedDate}
                // // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={undefined}
                // // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                // // maxDate={'2012-05-30'}
                // // Handler which gets executed on day press. Default = undefined
                onDayPress={day => {
                    {
                        setSelectedDate(day.dateString), console.log('start date', day.dateString)
                    }
                }}

                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={day => {
                    console.log('selected day', day);
                }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy MM'}

                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={month => {
                    console.log('month changed', month);
                }}
                // Hide month navigation arrows. Default = false
                hideArrows={true}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                // renderArrow={direction => <Arrow />}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}

                // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={false}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                // firstDay={7}
                // Hide day names. Default = false
                hideDayNames={false}
                // Show week numbers to the left. Default = false
                showWeekNumbers={false}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={subtractMonth => subtractMonth()}
                // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                // Disable left arrow. Default = false
                disableArrowLeft={true}
                // Disable right arrow. Default = false
                disableArrowRight={true}
                // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                disableAllTouchEventsForDisabledDays={false}

                // Replace default month and year title with custom one. the function receive a date as parameter
                // renderHeader={date => {
                //     /*Return JSX*/
                // }}
                // Enable the option to swipe between months. Default = false
                enableSwipeMonths={false}
                // style={{
                //     borderWidth: 1,
                //     borderColor: 'gray',
                //     height: 350,
                //   }}
                markedDates={{
                    [selectedDate]: { selected: true, marked: true, selectedColor: colors.white, },
                    // [selectedDate]: {marked: true},
                    // '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                    // '2012-05-19': {disabled: true, disableTouchEvent: true}
                }}
                theme={{
                    backgroundColor: colors.darkGreen,
                    calendarBackground: colors.darkGreen,
                    textSectionTitleColor: colors.white,
                    // textSectionTitleDisabledColor: '#d9e1e8',
                    // selectedDayBackgroundColor: 'white',
                    selectedDayTextColor: colors.darkGreen,
                    todayTextColor: '#00adf5',
                    // todayBackgroundColor:colors.white,
                    dayTextColor: colors.white,
                    textDisabledColor: 'red',
                    // dotColor: '#00adf5',
                    // selectedDotColor: '#ffffff',
                    // arrowColor: 'orange',
                    // disabledArrowColor: '#d9e1e8',
                    // monthTextColor: 'blue',
                    // indicatorColor: 'blue',
                    // textDayFontFamily: 'monospace',
                    // textMonthFontFamily: 'monospace',
                    // textDayHeaderFontFamily: 'monospace',
                    // textDayFontWeight: 'bold',
                    // textMonthFontWeight: 'bold',
                    // textDayHeaderFontWeight: '300',
                    textDayFontSize: 15,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 13,
                    textDayHeaderFontWeight: 'bold',
                }}
            />
            <View style={{ marginTop: 10, }}>
                <Button text={'Cancel'} backgroundColor={colors.white} textColor={colors.darkGreen} onPress={onCancel} />
            </View>
        </SafeAreaView >
    )
}

const EndCalenderDate: React.FC<any> = ({ onCancel, endDate, setEndDate }: any) => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Calendar
                minDate={undefined}
                onDayPress={day => {
                    { setEndDate(day.dateString), console.log('End date', day.dateString) }
                }}
                monthFormat={'yyyy MM'}
                hideArrows={true}
                hideExtraDays={true}
                disableMonthChange={false}
                hideDayNames={false}
                showWeekNumbers={false}
                onPressArrowLeft={subtractMonth => subtractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                disableArrowLeft={true}
                disableArrowRight={true}
                disableAllTouchEventsForDisabledDays={false}
                enableSwipeMonths={false}
                markedDates={{ [endDate]: { selected: true, marked: true, selectedColor: colors.white, }, }}
                theme={{
                    backgroundColor: colors.darkGreen,
                    calendarBackground: colors.darkGreen,
                    textSectionTitleColor: colors.white,
                    selectedDayTextColor: colors.darkGreen,
                    todayTextColor: '#00adf5',
                    dayTextColor: colors.white,
                    textDisabledColor: 'red',
                    textDayFontSize: 15,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 13,
                    textDayHeaderFontWeight: 'bold',
                }}
            />
            <View style={{ marginTop: 10, }}>
                <Button text={'Cancel'} backgroundColor={colors.white} textColor={colors.darkGreen} onPress={onCancel} />
            </View>
        </SafeAreaView >
    )
}

const RepaymentFrequency: React.FC<any> = ({ onCancel, setSelectedFrequency, selectedFrequency }: any) => {
    const handleClick = (item: any) => {
        setSelectedFrequency(item)
    }
    return (
        <SafeAreaView style={styles.safeAreaView}>
            {frequency.map((item, index) => {
                return (
                    <TouchableOpacity onPress={() => handleClick(item)}>
                        <Text style={[styles.frequencyText, { padding: 20, backgroundColor: item === selectedFrequency ? colors.lightGreen:undefined, }]}>{item?.name}</Text>
                    </TouchableOpacity>
                )
            })}
            <View style={{ marginTop: 40, }}>
                <Button text={'Cancel'} backgroundColor={colors.white} textColor={colors.darkGreen} onPress={onCancel} />
            </View>
        </SafeAreaView >
    )
}
const frequency = [{ name: 'Monthly' }]

export { EndCalenderDate, Calender, RepaymentFrequency }