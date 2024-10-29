import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
    const [enteredGoalTest, setEnterretGoldText] = useState('');

    function goalInputHadler(enteredGoalTest) {
        setEnterretGoldText(enteredGoalTest);
    }
    function addGoalHander() {
        props.onAddGoals(enteredGoalTest);
        setEnterretGoldText('');
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your course goal!"
                onChangeText={goalInputHadler}
                value={enteredGoalTest}
            />
            <Button title="LAYKHOAHOC" onPress={addGoalHander} />
        </View>
    );
}
export default GoalInput;
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        padding: 8,
    },
});
