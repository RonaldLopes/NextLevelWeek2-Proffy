import React from 'react'
import {View} from 'react-native'
import styles from './styles'
import PageHeader from '../../componentes/PageHeader'

function Favorites() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos" ></PageHeader>
        </View>
    )
}


export default Favorites