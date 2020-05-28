import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default class Todo extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id: 1,
                    name: "Study Redux"
                },
                {
                    id: 2,
                    name: "Study React"
                }
            ],
            input: ''
        }

    }

    handleTextChange = (text) => {
        this.setState({
            input: text
        })
    }
    handleAddPress = () => {
        const newItem = { id: this.state.todos.length + 1, name: this.state.input };
        const newArray = [...this.state.todos, newItem];
        this.setState({
            todos: newArray,
            input:''
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput placeholder="Add item name" onChangeText={(text) => 
                        this.handleTextChange(text)}></TextInput>
                    <Button title="Add" onPress={() => this.handleAddPress()}></Button>
                </View>
                <FlatList
                    data={this.state.todos}
                    renderItem={({ item }) =>
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40
    },
});
