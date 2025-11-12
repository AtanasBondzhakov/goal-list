import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import GoalList from './components/GoalList.jsx';

export default function App() {
    const [enteredText, setEnteredText] = useState('');
    const [goalList, setGoalList] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const inputTextHandler = (enteredText) => {
        setEnteredText(enteredText);
    }

    const addGoalHandler = () => {
        setGoalList(state => {
            return [...state, enteredText];
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
                <Modal visible={isModalVisible}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputText}
                            placeholder='Your new goal!'
                            onChangeText={inputTextHandler}
                            value={enteredText}
                        />
                        <View style={styles.button}>
                            <Button
                                title='Cancel'
                                color='#fff'
                                onPress={toggleModalVisibility}
                            />
                            <Button
                                title='Add Goal'
                                color='#fff'
                                onPress={addGoalHandler}
                            />
                        </View>
                    </View>
                </Modal>
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
    inputContainer: {
        flex: 1,
        backgroundColor: '#293a9cff',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 32,
        justifyContent: 'center'
    },
    button: {
        flexDirection: 'row',
        width: 200,
        paddingTop: 16,
        justifyContent: 'space-between'
    },
    inputText: {
        borderRadius: 6,
        borderWidth: 1,
        width: '70%',
        backgroundColor: '#ccc',
        padding: 8
    },
    initialScreenContainer: {
        paddingTop: 150,
        backgroundColor: '#503535ff'
    }
});
