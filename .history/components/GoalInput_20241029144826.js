import { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
} from 'react-native';

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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHadler}
                    value={enteredGoalTest}
                />

                <View>
                    <Button
                        title="LAYKHOAHOC"
                        onPress={addGoalHander}
                    />
                    <Button title="Cancel" />
                </View>
            </View>
        </Modal>
    );
}
export default GoalInput;
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
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
