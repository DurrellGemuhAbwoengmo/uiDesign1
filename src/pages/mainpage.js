import React from 'react';
import { View, 
         Text, 
         Image, 
         ImageBackground,
         TextInput
        } from 'react-native';
import styles from './mainpageStyle'

const Mainpage = () => {
    return (
        <View style = {styles.mainView}>
            <View style = {styles.uContainer}>
                <View style = {styles.captiontext}>
                    <Text style = {styles.gdmrnText}>
                        Good Morning 
                        
                    </Text>
                    <Text style = {styles.grtText}>
                        Dear Customers
                    </Text>
                </View>
                <View style = {styles.ppic}>
                    <Image 
                    style = {{
                        width: 50, 
                        height: 50, 
                        borderRadius: 90,

                    }}
                    source = {require('../images/1.1.jpg')}
                    />              
                </View>

            </View>
            <View style = {styles.mContainer}>
                    
                    <View>
                    <Image
                        source = {require('../images/3.jpg')}
                        style = {styles.backgroundImage}
                    />
                    </View>
                    <View style = {styles.calenda}>
                    <Text style = {styles.caltext1}>
                        #2038
                    </Text>
                    <Text style = {styles.caltext2}>
                        DAY 4
                    </Text>
                    </View>
            </View>
            <View style = {styles.lContainer}>
                <View style = {styles.captionHead}>
                    <Text style = {styles.caption}>
                        Clean Room after {" "}
                    </Text>
                    
                    <Text style = {styles.captionTime}>
                        9:30am
                    </Text>
                </View>
                <View style = {styles.cusInfo}>
                    <Text>
                        You can choose a time period to clean your Room.
                        Simply leave your requirements or feedbacks before 
                        or call the service.
                    </Text>
                    <View style = {styles.lastTwoItems}>
                        <View>
                            <Text style = {styles.nocleantext}>
                                No Clean Today
                            </Text>
                        </View>
                        <View style = {styles.button}>
                            <TextInput style = {styles.buttonField}
                            placeholder = "Confirm" 
                            placeholderTextColor = "#FFFFFF"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default Mainpage;

