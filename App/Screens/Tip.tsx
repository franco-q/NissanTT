import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Div, Text } from 'react-native-magnus'
import LottieView from 'lottie-react-native'
import Menu from '../Components/Menu'
import {
	LeftIcon1,
	LeftIcon2,
	LeftIcon3,
	LeftIcon4,
	LeftIcon5,
	LeftIcon6,
	LeftIcon7,
	LeftIcon8,
	RightIcon1,
	RightIcon2,
	RightIcon3,
	RightIcon4,
	RightIcon5,
	RightIcon6,
	RightIcon7,
	RightIcon8
} from '../Assets/SVG'

const Regular = 'Nissan Brand Regular'
const Bold = 'Nissan Brand Bold'
const Italic = 'Nissan Brand Italic'
const Light = 'Nissan Brand Light'

const tips = [
	{
		key: 1,
		LeftIcon: LeftIcon1,
		RightIcon: RightIcon1,
		title: 'Botón Modo Sport'
	},
	{
		key: 2,
		LeftIcon: LeftIcon2,
		RightIcon: RightIcon2,
		title: 'Control Crucero'
	},
	{
		key: 3,
		LeftIcon: LeftIcon3,
		RightIcon: RightIcon3,
		title: 'Android Auto / Apple Car Play'
	},
	{
		key: 4,
		LeftIcon: LeftIcon4,
		RightIcon: RightIcon4,
		title: 'Configuración Bose'
	},
	{
		key: 5,
		LeftIcon: LeftIcon5,
		RightIcon: RightIcon5,
		title: 'Configuración computadora de abordo'
	},
	{
		key: 6,
		LeftIcon: LeftIcon6,
		RightIcon: RightIcon6,
		title:
			'Activación o Desactivación de Tecnologías de Asistencia a la Conducción'
	},
	{
		key: 7,
		LeftIcon: LeftIcon7,
		RightIcon: RightIcon7,
		title: 'Uso de llave Inteligente'
	},
	{
		key: 8,
		LeftIcon: LeftIcon8,
		RightIcon: RightIcon8,
		title: 'Diferente Posiciones de Luces'
	}
]
const Tip = ({ navigation, route }) => {
	const item = tips.find(t => t.key == route.params.key)
	return (
		<Div flex={1} bg={'blackNissan'}>
			<Div pt={'xl'}>
				<Div
					row
					justifyContent={'space-between'}
					alignItems={'center'}
					mb={'md'}
					bg={'redNissan'}>
					<Div w={60} h={60}>
						<item.LeftIcon />
					</Div>
					<Div p={'md'} flex={1}>
						<Text fontSize={'lg'} color={'white'} fontFamily={Regular}>
							{item.title}
						</Text>
					</Div>
					<Div w={60} h={60}>
						{/* <item.RightIcon /> */}
					</Div>
				</Div>
			</Div>

			<Div p={'2xl'}>
				<Text color={'white'} fontFamily={Regular} textAlign={'center'}>
					Para activar el Modo Sport en tu Nissan Kicks, tenés que apretar el
					botón trasero en la palanca de tu caja CVT. Este modo te dará una
					respuesta más rápida de aceleración, útil para sobrepasar otros autos
					en ruta.
				</Text>
			</Div>
			<LottieView source={require('./Palanca.json')} autoPlay loop />
			<Menu navigation={navigation} />
		</Div>
	)
}

export default Tip
