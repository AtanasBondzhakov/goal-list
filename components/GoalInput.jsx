import { Button, Modal, StyleSheet, TextInput, View, Image } from "react-native";

export default function GoalInput({
    visible,
    enteredText,
    inputTextHandler,
    onCancel,
    onAdd
}) {
    return (
        <Modal visible={visible}>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
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
                        onPress={onCancel}
                    />
                    <Button
                        title='Add Goal'
                        color='#fff'
                        onPress={onAdd}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        backgroundColor: '#2d0e9c',
        alignItems: 'center',
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
        width: '80%',
        backgroundColor: '#cccccc',
        padding: 10,
        fontSize: 18
    },
    image: {
        width: 80,
        height: 80,
        marginBottom: 16
    }
})