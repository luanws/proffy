import React from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIconIcon from '../../assets/images/icons/heart.png'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

const Landing: React.FC = () => {
  const { navigate } = useNavigation()

  const navigateToGiveClassesPage = () => navigate('GiveClasses')

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.banner}
          source={landingImg}
        />

        <Text
          style={styles.title}
        >
          Seja bem-vindo, {'\n'}
          <Text
            style={styles.titleBold}
          >O que deseja fazer?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.button, styles.buttonPrimary]}>
            <Image
              source={studyIcon}
            />
            <Text style={styles.buttonText}>Estudar</Text>
          </RectButton>

          <RectButton
            onPress={navigateToGiveClassesPage}
            style={[styles.button, styles.buttonSecondary]}
          >
            <Image
              source={giveClassesIcon}
            />
            <Text style={styles.buttonText}>Dar aulas</Text>
          </RectButton>
        </View>

        <Text style={styles.totalConnections}>
          Total de 285 conexões realizadas {' '}
          <Image source={heartIconIcon} />
        </Text>
      </View>
    </ScrollView>
  )
}

export default Landing