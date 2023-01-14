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
import moment from 'moment';

const Coupons = props => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCoupons();
  }, []);



  // Fetch Index
  const fetchCoupons = async () =>{
    setLoading(true);
    try {
      const {data: response} = await axios.get('https://user1673281842743.requestly.dev/getCoupon');
      setCoupons(response.result);
    } catch (error) {
    //   console.error(error.message);
    }
    setLoading(false);
  }


// Condition when Fetch
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
      <View style={{
    paddingVertical: 11,

    width: '100%',
    borderRadius: 3,
marginTop: 15,
 }}>
    <Text style={styles.header}>{"Benefit Kupon Untuk Kamu"}</Text>
 </View>
        <View style={styles.container}>
            
          {coupons
            .map((coupon, index) => {
              return (
   

<TouchableOpacity style={styles.card} 
                  key={index}>
<Image
  style={styles.thumb}
  source={{uri: coupon.couponBrandLogo}}
/>
 <View style={styles.infoContainer}>
 <Text style={styles.name}>{coupon.couponBrandName}</Text>
 <Text style={styles.discount}>{coupon.couponQuota}{"%"} <Text style={{
      fontSize: 16,
      fontWeight: 'bold',
     marginTop: 15,
      alignItems: 'flex-start',
      justifyContent: 'center',
      color: '#868788'
 }}>{"Off"}</Text></Text>
 <Text style={styles.promo}>{"Promo Sampai"} {moment(coupon.couponEndDate).format('DD-MMM-YYYY')}</Text>
 <View style={{
    paddingVertical: 11,
    backgroundColor: '#26D27F',
    width: '130%',
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
    borderTopLeftRadius: 16,  
    borderBottomLeftRadius: 16,
    width: '40%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
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

  header: {
    fontSize: 26,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black'
    
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