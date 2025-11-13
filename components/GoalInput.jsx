import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

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
    }
})