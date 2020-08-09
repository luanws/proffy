import React, { useCallback } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import { BorderlessButton } from 'react-native-gesture-handler'
import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native'

interface Props {
  title: string
}

const PageHeader: React.FC<Props> = (props) => {
  const { title } = props

  const navigation = useNavigation()

  useCallback(() => {
    
  }, [])

  function handleGoBack() {
    navigation.navigate('Landing')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default PageHeader