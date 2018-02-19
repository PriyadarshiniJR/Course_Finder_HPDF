import React, {Component} from 'react';
import {Text,TextInput,StyleSheet,View,Image} from 'react-native';
import {Content, Card, CardItem, Body,Header,Item,Input,Button,Bottom} from 'native-base';


export default class AppBody extends Component {
    constructor(){
        super();
        this.state = {
            newValue:'',
            textValue:'',
            receivedEntity:'',
            receivedValue:''


        }
    }

    onChangeText(value){

        if((value=='A')||(value=='B')||(value=='C')||(value=='D')||(value=='E')||(value=='F')||(value=='G')||(value=='H')||(value=='I')||(value=='J')||(value=='K')||(value=='L')||(value=='M')||(value=='N')||(value=='O')||(value=='P')||(value=='Q')||(value=='R')||(value=='S')||(value=='T')||(value=='U')||(value=='V')||(value=='W')||(value=='X')||(value=='Y')||(value=='Z')){
        this.setState({
        textValue:'LIST ALL THE COURSE PROVIDERS \n WHO ARE THE AVAILABLE COURSE PROVIDERS? \n GIVE ME A LIST OF ALL THE COURSE PROVIDERS \n WHAT COURSES DOES X PROVIDE? \n WHAT COURSES ARE PROVIDED BY X \n HOW LONG IS Y \n WHAT IS THE DURATION OF Y? \n WHAT ARE THE COURSES UNDER Z? \n WHAT ARE THE COURSES FOR Z? \n WHAT COURSES ARE AVAILABLE FOR Z? \n WHO ARE THE INSTRUCTORS OF Y? \n WHO TEACHES Y? \n WHO TAKES Y? \n WHAT IS THE LINK OF Y? \n WHERE CAN I TAKE Y?'
        });
        }
        else if((value=='WHAT IS THE LINK')||(value=='WHAT IS THE LINK OF')){
        this.setState({
            textValue:'WHAT IS THE LINK OF Y?'
        });
        }

        else if((value=='WHERE')||(value=='WHERE CAN')||(value=='WHERE CAN I')||(value=='WHERE CAN I TAKE Y')){
        this.setState({
            textValue:'WHERE CAN I TAKE Y?'
        });
        }
        else if((value=='WHO')){
        this.setState({
            textValue:'WHO ARE THE INSTRUCTORS OF Y? \n WHO TEACHES Y? \n WHO TAKES Y?'
        });
        }
        else if((value=='WHO TAKES')||(value=='WHO TAKES Y')){
        this.setState({
            textValue:'WHO TAKES Y?'
        });
        }
        else if((value=='WHO TEACHES')||(value=='WHO TEACHES Y')){
        this.setState({
            textValue:'WHO TEACHES Y?'
        });
        }
        else if((value=='WHO ARE')||(value=='WHO ARE THE')||(value=='WHO ARE THE INSTRUCTORS')||(value=='WHO ARE THE INSTRUCTORS OF Y')){
        this.setState({
            textValue:'WHO ARE THE INSTRUCTORS OF Y?'
        });
        }
        else if(value=='WHAT'){
        this.setState({
            textValue:'WHAT COURSES DOES X PROVIDE? \n WHAT COURSES ARE PROVIDED BY X \n WHAT IS THE DURATION OF Y \n WHAT ARE THE COURSES FOR Z \n WHAT COURSES ARE AVAILABLE FOR Z \n WHAT IS THE LINK OF Y'
        });
        }
        else if((value=='WHAT ARE')||(value=='WHAT ARE THE')||(value=='WHAT ARE THE COURSES')){
        this.setState({
            textValue:'WHAT ARE THE COURSES UNDER Z? \n WHAT ARE THE COURSES FOR Z? '
        });
        }
        else if(value=='WHAT ARE THE COURSES UNDER Z'){
        this.setState({
            textValue:'WHAT ARE THE COURSES UNDER Z?'
        });
        }
        else if(value=='WHAT ARE THE COURSES FOR Z'){
        this.setState({
            textValue:'WHAT ARE THE COURSES FOR Z?'
        });
        }
        else if(value=='WHAT COURSES'){
        this.setState({
            textValue:'WHAT COURSES DOES X PROVIDE \n WHAT COURSES ARE PROVIDED BY X \n WHAT COURSES ARE AVAILABLE FOR Z'
        });
        }
        else if(value=='WHAT COURSES ARE'){
        this.setState({
            textValue:'WHAT COURSES ARE PROVIDED BY X \n WHAT COURSES ARE AVAILABLE FOR Z?'
        });
        }
       else if((value=='WHAT COURSES ARE AVAILABLE')||(value=='WHAT COURSES ARE AVAILABLE')||(value=='WHAT COURSES ARE AVAILABLE FOR ')){
        this.setState({
        textValue:'WHAT COURSES ARE AVAILABLE FOR Z?'
        });
        }
        else if((value=='WHAT COURSES ARE PROVIDED')||(value=='WHAT COURSES ARE PROVIDED BY ')){
        this.setState({
            textValue:'WHAT COURSES ARE PROVIDED BY X?'
        });
        }
        else if((value=='WHAT COURSES DOES')||(value=='WHAT COURSES DOES X')||(value=='WHAT COURSES DOES X PROVIDE')){
        this.setState({
            textValue:'WHAT COURSES DOES X PROVIDE?'
        });
        }
        else if((value=='HOW')||(value=='HOW LONG')||(value=='HOW LONG IS Y')){
        this.setState({
            textValue:'HOW LONG IS Y?'
        });
        }
        else if((value=='WHAT IS')||(value=='WHAT IS THE ')){
        this.setState({
            textValue:'WHAT IS THE DURATION OF Y?\n WHAT IS THE LINK OF Y?'
        });
        }
        else if((value=='WHAT IS THE DURATION')||(value=='WHAT IS THE DURATION OF Y')){
        this.setState({
            textValue:'WHAT IS THE DURATION OF Y?'
        });
        }
        else if((value=='LIST')||(value=='LIST ALL')||(value=='LIST ALL THE')||(value=='LIST ALL THE COURSE')||(value=='LIST ALL THE COURSE PROVIDERS')){
        this.setState({
            textValue:'LIST ALL THE COURSE PROVIDERS'
        });
        }
        else if((value=='GIVE')||(value=='GIVE ME A LIST')||(value=='GIVE ME A LIST OF ALL')||(value=='GIVE ME A LIST OF ALL COURSE PROVIDERS')){
        this.setState({
            textValue:'GIVE ME A LIST OF ALL COURSE PROVIDERS'
        });
        }


        else{
         this.setState({
            textValue:''
        });
        }
        this.setState({
            newValue:value
        });
    }



        onSubmit=()=>{

        console.log(this.state.newValue);
         return fetch('https://app.brashly30.hasura-app.io/query?input='+this.state.newValue)

          .then((response) => response.json())
          .then((data)=>{
                console.log(data.entity)
                console.log(data.value)
                this.setState({receivedEntity:data.entity});
                this.setState({receivedValue:data.value});
            })
          .catch((error) => {
        console.error(error);
           });



        }



    render() {
        return (
            <Content>

       <Image source={require('../img/b5new.jpg')} style={styles.backgroundImage}>
        </Image>
        <Text style={{ color: 'deepskyblue',fontFamily:'Courier New',
					 fontWeight:'bold',fontSize:16,paddingTop:5,paddingLeft:20}}>
                                The search for your desired starts here-
                     </Text>


        <TextInput style={styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "  Type your query here"
               placeholderTextColor = "black"
               autoCapitalize = "characters"
               onChangeText={(value) => this.onChangeText(value)}
               onSubmitEditing={this.onSubmit}/>
        <Text style={{paddingLeft:20}}> {this.state.textValue} </Text>




               <Text style={{ color: 'orange',fontFamily:'Courier New',
					 fontWeight:'bold',fontSize:16,paddingTop:50,paddingLeft:20}}>
                                The extracted entity is-
                     </Text>


                <TextInput style={styles.input2}
               underlineColorAndroid = "transparent"
               placeholder={this.state.receivedEntity}
               placeholderTextColor = "black"
               autoCapitalize = "characters"
               />

                <Text style={{ color: 'orange',fontFamily:'Courier New',
					 fontWeight:'bold',fontSize:16,paddingTop:10,paddingLeft:20}}>
                                The value is-
                     </Text>


                <TextInput style={styles.input2}
               underlineColorAndroid = "transparent"
               placeholder={this.state.receivedValue}
               placeholderTextColor = "black"
               autoCapitalize = "characters"
               />



        <Text style={{ color: 'black',fontFamily:'Courier New',
					 fontWeight:'bold',fontSize:16,paddingTop:25,paddingLeft:20}}>
                                *****NOTE***** </Text>
        <Text style={{
					 fontWeight:'bold',paddingLeft:20}}>X-Course Provider </Text>
        <Text style={{
					 fontWeight:'bold',paddingLeft:20}}>Y-Course   </Text>
        <Text style={{
					 fontWeight:'bold',paddingLeft:20,paddingBottom:300}}>Z-Domain of Courses </Text>


            </Content>

        );
    }
}

module.export = AppBody;
const styles = StyleSheet.create({
   container: {
     paddingTop:23
   },
   input: {
      margin: 5,
      height: 50,

      borderColor: 'deepskyblue',
      borderWidth: 5

   },

   input2: {
      margin: 5,
      height: 50,

      borderColor: 'orange',
      borderWidth: 5

   },
   submitButton: {
      backgroundColor: 'white',

      margin: 15,
      height: 100,
   },
   vs: {

     flex:1,
     flexWrap:'wrap',
     justifyContent: 'center',
    alignItems: 'center',
      backgroundColor: 'red',

   },
   submitButtonText:{
      color: 'white'
   },
    backgroundImage: {

        position: 'absolute',
        top:0,
        left:0,
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',


  }
})
