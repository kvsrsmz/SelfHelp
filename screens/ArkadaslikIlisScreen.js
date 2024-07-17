import React from 'react';
import { useMemo,ImageBackground,Dimensions, StatusBar, StyleSheet, View ,Text, TouchableOpacity,Image,TextInput,ScrollView} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors,laciColors,yesilColors } from '../theme'
import { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButton } from 'react-native-paper';
import HeartButton from './HeratButton';
import HeartButton2 from './HeartButton2';







export default function AnaSayfaScreen() {
  StatusBar.setHidden(true);
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(1);
  const [sectionUnlocked, setSectionUnlocked] = useState(false);

  const handleStepComplete = (step) => {
    setCurrentStep(step);
    if (step === 3) {
      setSectionUnlocked(true);
    }
  };

  
  
  return(
    
    <View style={styles.container}>
      <ScrollView>{/*YUKARI-AŞAĞI KAYDIRMA BAŞLANGIÇ(TÜM EKRAN)*/}
      <View style={styles.top}>
      <SafeAreaView >
      <ImageBackground 
            source={require('../assets/images/arkadaslik-iliski.jpg')} 
            style={styles.box}
            imageStyle={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}/>
            </SafeAreaView>
            </View>
    <View>
    <Text style={{color:"black", fontSize:15,paddingTop:55,marginHorizontal:55}}>Lorem ipsum dolor sit amet, consecttetur adipiscing elit. Nunc vulputate libero et velit interdum, ac alipuet odio mattis.</Text>
    </View>

    <Text style={styles.stepText}>Adım {currentStep}/3</Text>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarForeground, { width: `${(currentStep / 3) * 100}%` }]} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>1.BÖLÜM</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={() => handleStepComplete(currentStep)}>
          <Image source={require('../assets/icons/back.png')} className="w-4 h-8" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.stepsContainer}>
          <TouchableOpacity style={styles.step} onPress={() => handleStepComplete(1)}>
            <Text style={styles.stepText}>1.Adım</Text>
            {currentStep >= 1 && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
          <TouchableOpacity style={styles.step} onPress={() => handleStepComplete(2)}>
            <Text style={styles.stepText}>2.Adım</Text>
            {currentStep >= 2 && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
          <TouchableOpacity style={styles.step} onPress={() => handleStepComplete(3)}>
            <Text style={styles.stepText}>3.Adım</Text>
            {currentStep >= 3 && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>2.BÖLÜM</Text>
        {sectionUnlocked ? (
          <View style={styles.unlockedContainer}>
            <Text>Bölüm Açıldı!</Text>
          </View>
          ) : (
            <View style={styles.lockedContainer}>
              <Image source={require('../assets/icons/back.png')} className="w-4 h-8" style={styles.lockIcon} />
            </View>
          )}
          </View>
    
  


    
    


   
    
    
        
        
</ScrollView>{/*YUKARI-AŞAĞI KAYDIRMA BİTİŞ(TÜM EKRAN)*/}

  



  {/*BOTTOM BAR*/}
          <View style={styles.bottom}> 
            <View className="flex-row"> 
              {/*ANA SAYFA*/}
              <TouchableOpacity onPress={()=> navigation.navigate('AnaSayfa')}>
                <View style={{marginHorizontal:-6}}>
                  <Image source={require('../assets/icons/home.png')} style={{width:30,height:30,marginHorizontal:20}}  />
                  <Text style={{color:"white", marginRight:15,marginHorizontal:5}}>Ana Sayfa </Text>
                </View>
              </TouchableOpacity>
              {/*FAVORİLER*/}
              <TouchableOpacity onPress={()=> navigation.navigate('AnaSayfa')}>
                <View>
                  <Image source={require('../assets/icons/heart.png')} style={{width:30,height:30,marginHorizontal:20}}  />
                  <Text style={{color:"white",marginRight:15,marginHorizontal:3}}>Favorilerim </Text>
                </View>
              </TouchableOpacity>
              {/*CHATBOT*/}
              <TouchableOpacity onPress={()=> navigation.navigate('AnaSayfa')}>
                <View>
                  <Image source={require('../assets/icons/message.png')} style={{width:30,height:30,marginHorizontal:10}}  />
                  <Text style={{color:"white"}}>Chatbot </Text>
                </View>
              </TouchableOpacity>
              {/*TAKVİMİM*/}
              <TouchableOpacity onPress={()=> navigation.navigate('AnaSayfa')}>
                <View style={{marginRight:-5}}>
                  <Image source={require('../assets/icons/calendar.png')} style={{width:30,height:30,marginHorizontal:25}}  />
                  <Text style={{color:"white",marginHorizontal:10}}>Takvimim </Text>
                </View>
              </TouchableOpacity>
              {/*PROFİLİM*/}
              <TouchableOpacity onPress={()=> navigation.navigate('AnaSayfa')}>
                <View style={{marginRight:-13}}>
                  <Image source={require('../assets/icons/user.png')} style={{width:30,height:30,marginHorizontal:20}}/>
                  <Text style={{color:"white",marginHorizontal:10}}>Profilim </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
      </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    
  },
  top: {
    
  },
 
  box: {
    height: 300,
    borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
    
  },
  bottom: {
    backgroundColor: '#213a59', // Renk isteğinize göre değiştirin
    height: 70, // Yüksekliği isteğinize göre ayarlayın
    justifyContent: 'center', // İçeriği ortalamak için
    alignItems: 'center', // İçeriği ortalamak için
    position: 'absolute', 
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 10, borderTopRightRadius: 10,
  },
  
  
  
  
  
  
})