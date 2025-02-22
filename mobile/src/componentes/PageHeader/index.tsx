import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles'
import {BorderlessButton} from 'react-native-gesture-handler'
import backIcon from    '../../assets/images/icons/back.png'
import logoImg from    '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native';


interface PageHeaderProps{
    title: string,
}

const PageHeader:React.FC<PageHeaderProps> = ({title}) => {
    const {navigate} = useNavigation()
    function handleGoBack(){
        navigate('Landing')
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode='contain'></Image>
                </BorderlessButton>
                <Image source={logoImg} resizeMode='contain'></Image>
            </View>
        <Text style={styles.title}>{title}</Text>
        </View>
    )
}


export default PageHeader