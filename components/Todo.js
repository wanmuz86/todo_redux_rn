import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Todo extends React.Component {

    constructor() {
        super();
        this.state = {
            input: ''
        }
    }


    handleTextChange = (text) => {
        this.setState({
            input: text
        })
    }
    handleAddPress = () => {
        this.props.addItem(this.state.input)


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
                    data={this.props.todos}
                    renderItem={({ item }) =>
                        <View style={styles.item}>
                            {/* Ternary operator  - Normal JS */}
                            {
                                item.completed  ? <Text>Completed </Text>: <Text>Not Completed</Text>
                            }
                            <Text style={{ flex: 3 ,fontSize:20}}>{item.name}</Text>
                            <TouchableOpacity style={{ flex: 1 ,backgroundColor:'red', padding:20}} 
                            onPress={()=> this.props.deleteTodo(item.id)}>
                                <View>
                                    <Text>Delete</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1,backgroundColor:'orange', padding:20}} 
                            onPress={()=> this.props.markAsDone(item.id)}>
                                <View>
                                    <Text>Done</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //Put text to pass text to props
        addItem: (text) => dispatch({ type: 'ADD_TODO', text }),
        deleteTodo: (id) => dispatch({type:'DELETE_TODO',id}),
        markAsDone: (id) => dispatch({type:'MARK_AS_DONE',id})
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40
    },
    item: { flexDirection: 'row', width: 400, 
    backgroundColor: 'lightyellow', 
    paddingHorizontal:20, 
    marginVertical:10,
    alignItems:'center'
    
 }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo)