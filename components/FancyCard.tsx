import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}> Trending Places </Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
            source={{
                uri: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mike-bird-3729464.jpg&fm=jpg'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}> Car in Karachi </Text>
            <Text style={styles.cardLabel}> Red Car </Text>
            <Text style={styles.cardDescription}> This is very Beautiful Car, and the speed is very fast, Many people want's that car, but it's very Expensive </Text>
            <Text style={styles.cardFooter}> By Mehran </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 360,
        height: 390,
        borderRadius: 6,
        marginVertical: 12, 
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: '#ffffff',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },

    },
    cardImage: {
        height: 250,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: '#000000',
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 4,
    },
    cardLabel: {
        color: '#000000',
        fontSize: 16,
        marginBottom: 6,
    },
    cardDescription: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1,
    },
    cardFooter: {
        color: '#000000',
    },
})  