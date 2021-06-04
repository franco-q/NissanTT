import React, { useEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import { Button, Div, Text, Image } from 'react-native-magnus'
import { useHeaderHeight } from '@react-navigation/stack'
import { Dimensions, TouchableOpacity, View, StyleSheet } from 'react-native'

import Carousel from 'react-native-snap-carousel'

const Regular = 'Nissan Brand Regular'
const Bold = 'Nissan Brand Bold'
const Italic = 'Nissan Brand Italic'
const Light = 'Nissan Brand Light'

interface Props {
	navigation: any
}

const ENTRIES1 = [
	{
		illustration: require('../Assets/cars-1.png')
	},
	{
		illustration: require('../Assets/cars-1.png')
	},
	{
		illustration: require('../Assets/NISSAN-APPS-MAYO.jpg')
	},
	{
		illustration: require('../Assets/cars-1.png')
	},
	{
		illustration: require('../Assets/cars-1.png')
	}
]

const { width } = Dimensions.get('window')
const screenWidth = width - 30

const WelcomeCarousel = () => {
	const [entries, setEntries] = useState([])

	const carouselRef = useRef<Carousel<any>>(null)

	const goForward = () => {
		carouselRef.current.snapToNext()
	}
	const goBack = () => {
		carouselRef.current.snapToPrev()
	}

	useEffect(() => {
		setEntries(ENTRIES1)
	}, [])

	const renderItem = ({ item }: { item: any; index: number }) => {
		return (
			<Div w={screenWidth - 100} h={screenWidth - 100}>
				<Image source={item.illustration} style={styles.image} />
			</Div>
		)
	}

	return (
		<View>
			<TouchableOpacity onPress={goForward}>
				<Text>goForward</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={goBack}>
				<Text>goBack</Text>
			</TouchableOpacity>
			<Carousel
				ref={carouselRef}
				sliderWidth={screenWidth}
				sliderHeight={screenWidth}
				itemWidth={screenWidth - 100}
				data={entries}
				renderItem={renderItem}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	image: {
		...StyleSheet.absoluteFillObject,
		resizeMode: 'center'
	}
})

const Welcome: FC<Props> = ({ navigation }) => {
	const { width: screenWidth } = Dimensions.get('window')
	const carousel = useRef(null)
	const headerHeight = useHeaderHeight()

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={() => navigation.navigate('Signin')}>
					<Text p={'md'} mr={'md'} fontFamily={Light} fontSize={'xl'}>
						Volver atrás
					</Text>
				</TouchableOpacity>
			)
		})
	}, [])

	return (
		<Div pt={headerHeight} bgImg={require('../Assets/bg-pattern.jpg')} flex={1}>
			<Div mb={'xl'} alignItems={'center'}>
				<Text fontSize={'7xl'} fontFamily={Regular}>
					Bienvenidos
				</Text>
				<Text fontSize={'lg'} fontFamily={Regular} textAlign={'center'} w={250}>
					Antes de Comenzar, seleccioná el modelo de tu Nissan.
				</Text>
			</Div>
			<WelcomeCarousel />
			<Div row justifyContent={'center'}>
				<Button
					rounded={0}
					m={'auto'}
					px="2xl"
					py="md"
					bg="redNissan"
					fontFamily={Light}
					color="white"
					onPress={() => navigation.navigate('Main')}>
					Aceptar
				</Button>
			</Div>
		</Div>
	)
}

export default Welcome
