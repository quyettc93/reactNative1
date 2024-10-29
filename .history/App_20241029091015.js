import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    function addGoalHander(enteredGoalTest) {
        setCourseGoals((s) => [
            ...s,
            { text: enteredGoalTest, id: Math.random().toString() },
        ]);
    }
    function deleteGoalHandler() {
        console.log('DELETE');
    }
    return (
        <View style={styles.container}>
            <GoalInput onAddGoals={addGoalHander} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    alwaysBounceVertical={false}
                    renderItem={(i) => {
                        return <GoalItem text={i.item.text} />;
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
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
