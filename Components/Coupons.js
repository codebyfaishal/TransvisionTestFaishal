//Coupons.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { color } from 'react-native-reanimated';

const Coupons = props => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCoupons();
  }, []);

//   const fetchCoupons = () => {
//     fetch('https://user1673281842743.requestly.dev/getCoupon')
//       .then(response => response.json())
//       .then(coupons => setCoupons(coupons.result));
      
//   };

  const fetchCoupons = async () =>{
    setLoading(true);
    try {
      const {data: response} = await axios.get('https://user1673281842743.requestly.dev/getCoupon');
      setCoupons(response.result);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  }

// const fetchCoupons = () => {
//     axios
//         .get("https://pokeapi.co/api/v2/pokemon?limit=500")
//         .then((coupons) => {
//             setCoupons(coupons.results);
//         });
// };

// const fetchCoupons = async () => {
//     try {
//       const response = await axios.get(
//         'https://pokeapi.co/api/v2/pokemon?limit=500',
//       );
//       alert(JSON.stringify(response.results))
//       .then(coupons => setCoupons(coupons.results));
//     } catch (error) {
//       // handle error
//       alert(error.message);
//     }
//   };

//   // Make function to call the api
//   const fetchCoupons = async () =>{
//     setLoading(true);
//     try {
//       const {coupons: response} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=500');
//       setCoupons(response.results);
//     } catch (error) {
//       console.error(error.message);
//     }
//     setLoading(false);
//   }

if(loading){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#26D27F" />
        </View>
    );
}

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
            
          {coupons
            // .filter(pokemon =>
            //   pokemon.couponBrandName.toLowerCase().includes(searchfeild.toLowerCase())
            // )
            .map((pokemon, index) => {
                console.log('pokemon image', pokemon.couponBrandLogo )
              return (
   

<TouchableOpacity style={styles.card} 
//  onPress={() =>
//                     props.navigation.navigate('Details', {
//                       pokemon: pokemon.couponBrandName,
//                     })
//                   }
                  key={index}>
<Image
  style={styles.thumb}
  source={{uri: pokemon.couponBrandLogo}}
/>
 <View style={styles.infoContainer}>
 <Text style={styles.name}>{pokemon.couponBrandName}</Text>
 <Text style={styles.discount}>{pokemon.couponQuota}</Text>
 <Text style={styles.promo}>{"Promo Sampai 31 Desember 2022"}</Text>
 <View style={{
    paddingVertical: 11,
    backgroundColor: '#26D27F',
    width: '100%',
    borderRadius: 3,
marginTop: 15,
 }}>
    <Text style={styles.tukarkan}>{"Tukarkan"}</Text>
 </View>
  </View>
  

</TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Coupons;

const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     marginTop: 30,
//   },
//   card: {
//     display: 'flex',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: 'black',
//     marginHorizontal: 20,
//     marginVertical: 10,
//   },
//   searchCont: {
//     position: 'absolute',
//     marginBottom: 70,
//     left: '20%',
//     zIndex: 1,
//     marginTop: 10,
//   },
//   searchfeild: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#000',
//     textAlign: 'center',
//     width: 250,
//     borderRadius: 50,
//   },

  //style
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 13,
    flexDirection: 'row',
    marginHorizontal: 13,
  },
  thumb: {
    // height: 175,
    borderTopLeftRadius: 16,
  
    borderBottomLeftRadius: 16,

    // paddingHorizontal: 60,
    // paddingVertical: 60,
    width: '40%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    // textAlign: 'right',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  discount: {
    fontSize: 25,
    fontWeight: 'bold',
   marginTop: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: '#26D27F'
    
  },
  tukarkan: {
    fontSize: 12,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white'
    
  },
  promo: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: '#868788'
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});