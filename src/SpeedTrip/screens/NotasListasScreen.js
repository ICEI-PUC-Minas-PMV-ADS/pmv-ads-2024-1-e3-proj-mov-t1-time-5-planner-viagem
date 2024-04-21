import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  Text
} from 'react-native';

// Note component to render individual note items
const Note = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.note}>{text}</Text>
    </TouchableOpacity>
  );
};

const NotesListScreen = () => {
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([]);

  // Add a new note to the list
  const addNote = () => {
    Keyboard.dismiss();
    if (noteText.trim() !== '') {
      setNotes([...notes, noteText]);
      setNoteText('');
    }
  };

  // Delete a note from the list
  const deleteNote = index => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.notesContainer}>
        {notes.map((note, index) => (
          <Note key={index} text={note} onPress={() => deleteNote(index)} />
        ))}
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Add a note'}
          value={noteText}
          onChangeText={text => setNoteText(text)}
        />
        <TouchableOpacity onPress={addNote}>
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  notesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  note: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f9c2ff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#f9c2ff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addButtonText: {
    fontSize: 24,
  },
});

export default NotesListScreen;
