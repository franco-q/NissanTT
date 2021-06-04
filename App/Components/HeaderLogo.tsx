import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Div } from 'react-native-magnus'
import Icon from '../Assets/SVG/Logo Nissan Negativo.svg'

const HeaderLogo = () => {
	return (
		<Div ml={'lg'}>
			<TouchableOpacity>
				<Div h={50} w={50}>
					<Icon />
				</Div>
			</TouchableOpacity>
		</Div>
	)
}

export default HeaderLogo
