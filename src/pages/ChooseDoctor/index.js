import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor3} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';
import {Fire} from '../../config';

const ChooseDoctor = ({navigation, route}) => {
  const [listDoctor, setListDoctor] = useState([])
  const itemCategory = route.params;
  useEffect (() => {
    callDoctorByCategory (itemCategory.category);
  }, []);

  const callDoctorByCategory = category => {
    Fire.database ()
      .ref ('doctors/')
      .orderByChild ('category')
      .equalTo (category)
      .once ('value')
      .then (res => {
        console.log ('data list doctor', res.val ());
        if (res.val()) {
          const oldData = res.val()
          const data = []
          Object.keys(oldData).map(item => {
            data.push({
              id: item,
              data: oldData[item]
            })
          })
          console.log('parse list doctor', data);
          setListDoctor(data)
        }
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title={`Pilih ${itemCategory.category}`}
        onPress={() => navigation.goBack ()}
      />
      {listDoctor.map(doctor => {
        return (
          <List
            key={doctor.id}
            type="next"
            profile={{ uri: doctor.data.photo }}
            name={doctor.data.fullName}
            desc={doctor.data.gender}
            onPress={() => navigation.navigate('DoctorProfile', doctor)}
          />
        )
      })}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create ({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
