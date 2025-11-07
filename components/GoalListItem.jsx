import { StyleSheet, Text, View } from "react-native";

export default function GoalListItem({
    goal
}) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText} key={goal}>{goal}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: '#4d6cc2ff',
        borderWidth: 1,
        padding: 16,
        margin: 6,
        borderRadius: 6
    },
    goalText: {
        color: '#dadae0ff',
        fontSize: 16
    }
});