import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: '#f5f5f5'
  },
  headerText:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,
    color:'#333'
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  infoBox:{
    backgroundColor:'#ffffff',
    padding:15,
    borderRadius:10,
    marginBottom:25,
    shadowColor:'#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoText:{
    fontSize:16,
    textAlign:'center',
    color:'#f70f2a',
    lineHeight:24
  }
});
