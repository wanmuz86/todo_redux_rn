import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
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

const mapStateToProps = (state) =>{
    return {
        todos:state.todos
    }
}
const mapDispatchToProps= (dispatch) =>{
    return {
        //Put text to pass text to props
        addItem: (text) => dispatch({type:'ADD_TODO',text})
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

export default connect(mapStateToProps,mapDispatchToProps)(Todo)