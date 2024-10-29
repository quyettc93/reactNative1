import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
        console.log(modalIsVisible);
    }

    function addGoalHander(enteredGoalTest) {
        setCourseGoals((c) => [
            ...c,
            { text: enteredGoalTest, id: Math.random().toString() },
        ]);
    }
    function deleteGoalHandler(id) {
        setCourseGoals((c) => {
            return c.filter((goal) => goal.id !== id);
        });
    }
    return (
        <View style={styles.container}>
            <Button
                title="them khoa moi"
                color="#5e0acc"
                onPress={startAddGoalHandler}
            />
            {modalIsVisible && (
                <GoalInput onAddGoals={addGoalHander} />
            )}
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    alwaysBounceVertical={false}
                    renderItem={(i) => {
                        return (
                            <GoalItem
                                text={i.item.text}
                                id={i.item.id}
                                onDeleteItem={deleteGoalHandler}
                            />
                        );
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
        justifyContent: 'center',
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
