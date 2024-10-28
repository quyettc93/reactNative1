import { StyleSheet } from 'react-native';

function GoalItem() {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{i.item.text}</Text>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
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
