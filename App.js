import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import GoalList from './components/GoalList.jsx';
import GoalInput from './components/GoalInput.jsx';

export default function App() {
    const [enteredText, setEnteredText] = useState('');
    const [goalList, setGoalList] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const inputTextHandler = (enteredText) => {
        setEnteredText(enteredText);
    }

    const addGoalHandler = () => {
        if (!enteredText.trim()) {
            return;
        }

        const existingGoal = goalList.find(
            goal => goal.text.toLowerCase() === enteredText.trim().toLowerCase()
        );

        if (existingGoal) {
            return;
        }

        setGoalList(state => {
            return [
                ...state,
                { id: Math.random(), text: enteredText.trim() }
            ];
        });
        setEnteredText('');
        setIsModalVisible(false);
    }

    const toggleModalVisibility = () => {
        setIsModalVisible(state => !state);
        setEnteredText('');
    }

    return (
        <>
            <StatusBar style='light' />
            <View style={styles.appContainer}>
                <View style={styles.initialScreenContainer}>
                    <Button
                        title='Add New Goal'
                        color='#fff'
                        onPress={toggleModalVisibility}
                    />
                </View>
                <GoalInput
                    visible={isModalVisible}
                    enteredText={enteredText}
                    inputTextHandler={inputTextHandler}
                    onCancel={toggleModalVisibility}
                    onAdd={addGoalHandler}
                />
                <GoalList goalList={goalList} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#cccccc'
    },
    initialScreenContainer: {
        paddingTop: 150,
        backgroundColor: '#503535ff'
    }
});
