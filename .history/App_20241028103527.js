import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView,
    FlatList,
} from 'react-native';
import { useState } from 'react';
export default function App() {
    const [enteredGoalTest, setEnterretGoldText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    function goalInputHadler(enteredText) {
        setEnterretGoldText(enteredText);
    }
    function addGoalHander() {
        setCourseGoals((s) => [
            ...s,
            { text: enteredGoalTest, key: Math.random().toString() },
        ]);
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHadler}
                />
                <Button title="LAYMA" onPress={addGoalHander} />
            </View>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    alwaysBounceVertical={false}
                    keyExtractor={(item, index)}
                    renderItem={(i) => {
                        return (
                            <View style={styles.goalItem}>
                                <Text style={styles.goalText}>
                                    {i.item.text}
                                </Text>
                            </View>
                        );
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
    },
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
    goalsContainer: {
        flex: 5,
    },
    goalItem: {
        padding: 8,
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
    },
});
