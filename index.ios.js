//import some code we need
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');
var Moment = require('moment');

//create a react component


var Weekdays = React.createClass({
   render: function(){
       return <View style={styles.container}>
           {this.days()}
        </View>
   },
    days: function(){
        var dayItems = [];
        for (var i=0; i<7;i++){
            var day = Moment().add(i,'days').format('dddd');
            dayItems.push(
                <DayItem day={day} daysUntil={i} />
            )
        }
        
        return dayItems;
    }
});



//style the React componenet
var styles = StyleSheet.create({
   container:{
       flex:1,
       //flexDirection: 'row',
       justifyContent: 'center', //moves stuff height wise
       alignItems: 'center' //moves stuff width wise
   } 
});


//Show the react component on the screen
AppRegistry.registerComponent('weekdays',function(){
   return Weekdays; 
});