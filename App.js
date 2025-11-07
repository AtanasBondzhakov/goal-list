import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [enteredText, setEnteredText] = useState('');
    const [goalList, setGoalList] = useState([]);

    const inputTextHandler = (enteredText) => {
        setEnteredText(enteredText);
    }

    const addGoalHandler = () => {
        setGoalList(state => {
            return [...state, enteredText];
        });
        setEnteredText('');
    }

    return (
        <>
            <StatusBar style='light' />
            <View style={styles.appContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        placeholder='Your new goal!'
                        onChangeText={inputTextHandler}
                        value={enteredText}
                    />
                    <Button
                        title='Add Goal'
                        color='#fff'
                        onPress={addGoalHandler}
                    />
                </View>
                <View style={styles.goalListContainer}>
                    <FlatList
                        data={goalList}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.goalItem}>
                                    <Text style={styles.goalText} key={item}>{item}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 32
    },
    goalListContainer: {
        flex: 6,
        backgroundColor: '#999898ff',
        paddingTop: 16
    },
    inputText: {
        // borderColor: '#222',
        borderRadius: 6,
        borderWidth: 1,
        width: '70%',
        backgroundColor: '#ccc',
        padding: 8
    },
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
