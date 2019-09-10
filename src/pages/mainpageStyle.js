import { StyleSheet } from 'react-native';


const styles = StyleSheet.create ({
    mainView: {
        backgroundColor: 'green',
        flex: 1,
    },

    uContainer: {
        backgroundColor: '#ffffff',
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',          
    },
    captiontext: {
        flex: 2,
        
    },
    ppic: {
        flex: 1,
        alignItems: 'center'
    },
    mContainer:{
        backgroundColor: '#FFFFFF',
        flex: 3,
    },
    lContainer: {
        backgroundColor: '#FFFFFF',
        flex: 2,
        padding: 20,
        paddingBottom: 0
    },
    gdmrnText: {
        color: '#3940A1',
        marginLeft: 20,
        
    },
    grtText: {
        color: '#3940A1',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
        paddingTop: 10,  
    },
    captionHead:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 5,
    },
    caption: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#3940A1',
        paddingBottom: 10
    },
    captionTime: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#F97A5C',
    },
    backgroundImage: {
            width: 300,
            height: 300,
            position: 'absolute',
            top: 0,
            left: 60,
            width: 350,
            height: 350,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20
    },
    calenda: {
        position: 'absolute',
        top: 150,
        left: 30,
        width: 80,
        height: 80,
        backgroundColor: '#5054DF',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    caltext1:{
        color: '#FFFFFF',
    },
    caltext2:{
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    cusInfo: { 
        justifyContent: 'space-around'
        }, 
    buttonField: {
            width: 75,
            backgroundColor:'#F97A5C',
            borderRadius: 5,
        },
    button: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    nocleantext: {

    },
    lastTwoItems: {
        paddingBottom: 2,
        justifyContent: 'space-around'
    }
});

export default styles;