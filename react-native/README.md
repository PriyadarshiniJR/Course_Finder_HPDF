# CourseFinder APP using React Native and Wit.ai api

### CLONING THE REPO AND RUNNING THE APP WITH DEVELOPMENT SERVER-

Requirements-

To have the repo working on your system you need to carry out the following steps-

•	Install ‘node’ globally: available at https://nodejs.org/en/

•	Install ‘npm’ globally

•	Install ‘React-Native’ globally: Run the following code in Command Prompt
```
npm install -g react-native-cli
```
•	Install ‘Android Studio’ as per the instructions given in setting up Android Development Environment section in https://facebook.github.io/react-native/docs/getting-started.html page

Now you are ready to test the app. Just follow the remaining steps-

•	Clone or download the repo on your system

•	Open Command Prompt in Administrator mode

•	Run the following code:
```
cd ‘location of the repo in your system’

npm install

npm install native-base --save

react-native link
```
•	Connect your android device enabling USB Debugging(or you can use Android Emulator)

•	Next Run the following code:
```
react-native run-android
```
App should get installed and start working on the connected device

### INSTALLING THE APK AND RUNNING THE APP-

•	Click on the following link:https://drive.google.com/open?id=1i5HUPR0bKUcA-v_d04Ci5BkIYPxp4qpu

•	A Google Drive page opens up and you will be prompted to download the file. Click on **DOWNLOAD** and the download should start. 

•	After the download is complete install the apk on your android device.

### GOING INTO THE APP =>
The app basically has two text boxes,the first one takes the input query and the second one shows the extracted entity. 
![Screenshot](https://user-images.githubusercontent.com/30779692/35636017-e945a97a-06d5-11e8-851c-e40814601496.png)

When a user types something in the first box it also shows a set of suggestions of the allowed inputs-

![screenshot_2018-01-31-02-11-38](https://user-images.githubusercontent.com/30779692/35636502-534cea44-06d7-11e8-9f7d-8eec6acd07b2.png)

On submitting the input the app makes a request to the **wit.ai** api and fetches the result which is shown in the second text box-

![result](https://user-images.githubusercontent.com/30779692/35636664-eb3eeee2-06d7-11e8-8548-2e01fda3dacc.png)

Code that comes into play to send requests and save the received result from the api-

```
onSubmit = () =>{

         console.log(this.state.newValue);
         return fetch('https://app.appointee63.hasura-app.io/query?input='+this.state.newValue)
         .then(
            (response)=> {
            if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
            }



            // Examine the text in the response
            response.text().then((data)=>{
             console.log(data);
             this.setState({receivedValue:data});
            });
            }
            )
            .catch(function(err) {
            console.log('Fetch Error :-S', err);
            });

        }

```
FOLLOWING IS THE LIST OF ALLOWED INPUTS ALONG WITH THEIR RESULT -

![allowedinputs](https://user-images.githubusercontent.com/30779692/35638866-4fdbeb6a-06de-11e8-9f16-f71e38f84a56.png)

