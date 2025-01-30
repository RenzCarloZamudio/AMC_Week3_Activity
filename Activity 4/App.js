import React, {useState} from 'react';
import {StyleSheet, Text, Image, TextInput, TouchableOpacity, View} from 'react-native';
import type {PropsWithChildren} from 'react';

const FlexDirectionBasics = () => {
  const [text, onChangeText] = React.useState('Name: ');
  const [age, onChangeAge] = React.useState('Age: ');
  const [address, onChangeAddress] = React.useState('Address: ');
  const [school, onChangeSchool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course: ');
  const [email, onChangeEmail] = React.useState('Email: ');
  const [contact, onChangeContact] = React.useState('Contact: ');
  const [about, onChangeAbout] = React.useState('About: ');

  const [flexDirection, setflexDirection] = useState('column');

  return (
    <PreviewLayout
      label="Activity 4 by Zamudio"
      values={[]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}>


      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pictograms-nps-accommodations-mens-restroom-2.svg/640px-Pictograms-nps-accommodations-mens-restroom-2.svg.png',
          }}
          style={{width: 50, height: 50, marginLeft: 25, marginTop: 5}}
        />
      <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>       


      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Number_7.svg/640px-Number_7.svg.png',
          }}
          style={{width: 50, height: 50, marginLeft: 25, marginTop: 5}}
        />
      <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          //placeholder="Age: "
          keyboardType="numeric"
        />
      </View>


      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/20031012-002-houses-st-albans.jpg/640px-20031012-002-houses-st-albans.jpg',
          }}
          style={{width: 50, height: 50, marginLeft: 25, marginTop: 5}}
        />
       <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
        />
      </View>              


      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Residential_College_South.jpg/640px-Residential_College_South.jpg',
          }}
          style={{width: 50, height: 50, marginLeft: 25, marginTop: 5}}
        />
      <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
        />
      </View>    


      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Logo_Information_Technology.jpg/640px-Logo_Information_Technology.jpg',
          }}
          style={{width: 50, height: 50, marginLeft: 25, marginTop: 5}}
        />
      <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Email_Shiny_Icon.svg/640px-Email_Shiny_Icon.svg.png',
          }}
          style={{width: 50, height: 50, marginLeft: 25, marginTop: 5}}
        />
      <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />
      </View>   


      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Phone_iOS.png/640px-Phone_iOS.png',
          }}
          style={{width: 50, height: 50, marginLeft: 25, marginTop: 5}}
        />
      <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          value={contact}
          //placeholder="Contact: "
          keyboardType="numeric"
        />
      </View>  


      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Information_icon.svg/640px-Information_icon.svg.png',
          }}
          style={{width: 50, height: 50, marginLeft: 25, marginTop: 5}}
        />
      <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          marginLeft={'auto'}
          onChangeAbout={text => onChangeAbout(text)}
          value={about}
          style={styles.textInput1}
          
        />
      </View>  
      
      
     
    </PreviewLayout>

    
  );
};

  

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    flexDirection: 'column',
    height: 40,
    width: 1000,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  textInput1: {
    borderBottomColor: 'black',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    width: 1000,
    padding: 10,
    margin: 12,
    shadowColor: 'black',
  },

  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default FlexDirectionBasics;