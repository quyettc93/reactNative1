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

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="LAYKHOAHOC"
                            onPress={addGoalHander}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}
export default GoalInput;
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column', // mac dinh la column roi
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100
    %',
        padding: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
    },
});
