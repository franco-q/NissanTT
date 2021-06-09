import React, { FC, useEffect, useRef, useState } from 'react'
import { TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native'
import { Text, Div, useTheme, DivProps } from 'react-native-magnus'
import * as Animatable from 'react-native-animatable'
import {
	MenuIcon,
	PerfilIcon,
	TipsIcon,
	PoliticsIcon,
	CloseIcon
} from '../Assets/SVG'

const Regular = 'Nissan Brand Regular'
const Bold = 'Nissan Brand Bold'
const Italic = 'Nissan Brand Italic'
const Light = 'Nissan Brand Light'

const MenuItem: FC<
	{ children: string; Icon: FC; onPress: () => void } & DivProps
> = ({ children, Icon, onPress, ...rest }) => {
	const { theme } = useTheme()
	return (
		<Div {...rest}>
			<TouchableHighlight
				onPress={onPress}
				underlayColor={theme.colors.redNissan}>
				<Div p={'xl'}>
					<Div h={50}>
						<Icon />
					</Div>
					<Text
						fontSize={'lg'}
						fontFamily={Regular}
						textAlign={'center'}
						color={'white'}
						mt={'lg'}>
						{children}
					</Text>
				</Div>
			</TouchableHighlight>
		</Div>
	)
}

const useDidMountEffect = (func, deps) => {
	const didMount = useRef(false)

	useEffect(() => {
		if (didMount.current) func()
		else didMount.current = true
	}, deps)
}

const MenuIconToggle = ({ onPress }) => {
	const [open, setOpen] = useState(false)

	return (
		<Div mr={'xl'}>
			<TouchableOpacity
				onPress={() => {
					setOpen(v => !v)
					onPress(!open)
				}}>
				{open ? (
					<Div h={25} w={25}>
						<CloseIcon />
					</Div>
				) : (
					<Div h={30} w={30}>
						<MenuIcon />
					</Div>
				)}
			</TouchableOpacity>
		</Div>
	)
}

const Menu = props => {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		props.navigation.setOptions({
			headerRight: () => <MenuIconToggle onPress={v => setOpen(v)} />
		})
	}, [])

	const windowWidth = Dimensions.get('window').width

	return (
		<Animatable.View
			transition={['translateX', 'opacity']}
			easing={'ease-out-cubic'}
			duration={100}
			delay={open ? 0 : 300}
			useNativeDriver={true}
			style={{
				backgroundColor: 'rgba(0,0,0,0.7)',
				position: 'absolute',
				translateX: open ? 0 : windowWidth,
				opacity: open ? 1 : 0,
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			}}>
			<Animatable.View
				transition={['translateX', 'opacity']}
				easing={'ease-out-cubic'}
				duration={500}
				delay={open ? 100 : 0}
				useNativeDriver={true}
				style={{
					position: 'absolute',
					translateX: open ? 0 : windowWidth,
					opacity: open ? 1 : 0,
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}}>
				<Div
					bg={'greyNissan'}
					position={'absolute'}
					top={0}
					bottom={0}
					w={200}
					right={0}
					flex={1}
					borderRightColor={'redNissan'}
					borderRightWidth={3}>
					<MenuItem
						onPress={() => props.navigation.navigate('Main')}
						Icon={TipsIcon}>
						NISSAN TIPS
					</MenuItem>
					<MenuItem
						onPress={() => props.navigation.navigate('Main')}
						Icon={PoliticsIcon}>
						POLITICAS DE PRIVACIDAD
					</MenuItem>
					<MenuItem
						onPress={() => props.navigation.navigate('Main')}
						Icon={PerfilIcon}
						mt={'auto'}>
						MI PERFIL
					</MenuItem>
				</Div>
			</Animatable.View>
		</Animatable.View>
	)
}

export default Menu
