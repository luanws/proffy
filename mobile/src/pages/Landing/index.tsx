import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import landingImg from '../../assets/images/landing.png'

const Landing: React.FC = () => {
  return (
    <View style={styles.container}>
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
    </View>
  )
}

export default Landing