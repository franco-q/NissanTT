import React, { FC } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Text, Div } from 'react-native-magnus'
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
import Menu from '../Components/Menu'

const Regular = 'Nissan Brand Regular'
const Bold = 'Nissan Brand Bold'
const Italic = 'Nissan Brand Italic'
const Light = 'Nissan Brand Light'

interface Props {
	navigation: any
}

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

const Intro: FC<Props> = ({ navigation }) => {
	return (
		<Div px={'lg'} flex={1} bg={'blackNissan'}>
			<Div row py={'lg'}>
				<Text color={'white'} fontSize={'5xl'} mr={'sm'} fontFamily={Bold}>
					TIPS
				</Text>
				<Text color={'white'} fontSize={'5xl'} fontFamily={Regular}>
					NISSAN Kicks
				</Text>
			</Div>
			<FlatList
				data={tips}
				keyExtractor={e => `friend-list-item-${e.key}`}
				renderItem={({ item }) => (
					<Div>
						<Div
							row
							justifyContent={'space-between'}
							alignItems={'center'}
							mb={'md'}>
							<Div w={60} h={60}>
								<item.LeftIcon />
							</Div>
							<Div p={'md'} flex={1}>
								<TouchableOpacity onPress={() => console.log(item)}>
									<Text fontSize={'lg'} color={'white'} fontFamily={Regular}>
										{item.title}
									</Text>
								</TouchableOpacity>
							</Div>
							<Div w={60} h={60}>
								<item.RightIcon />
							</Div>
						</Div>
					</Div>
				)}
			/>
			<Menu navigation={navigation} />
		</Div>
	)
}

export default Intro
