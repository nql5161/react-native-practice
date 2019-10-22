import React, { useState } from 'react';
import { DatePickerIOS, View, StyleSheet, Text } from 'react-native';

const CalendarScroll = () => {
    const [date, setDate] = useState(new Date());

    const timeInterval = {
        'ONE': 1,
        'FIVE': 5,
        'TEN': 10,
        'FIFTEEEN': 15,
        'TWENTY': 20,
        'THIRTY': 30,
        'SIXTY': 60
    }

    const getDate = (enteredDate) => {
        setDate(enteredDate);
    }

    return (
        <View style={styles.container}>
            <DatePickerIOS
                date={date}
                onDateChange={getDate}
                minimumDate={new Date()}
                minuteInterval={timeInterval.FIFTEEEN}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default CalendarScroll;