import { FlatList, StyleSheet, Text, View } from "react-native";
import GoalListItem from "./GoalListItem.jsx";

export default function GoalList({
    goalList,
    onDelete
}) {
    return (
        <View style={styles.goalListContainer}>
            <FlatList
                data={goalList}
                renderItem={({ item }) => (
                    <GoalListItem
                        goal={item.text}
                        onDelete={onDelete}
                        goalId={item.id}
                    />
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    goalListContainer: {
        flex: 6,
        backgroundColor: '#999898ff'
    }
})