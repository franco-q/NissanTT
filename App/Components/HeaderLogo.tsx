import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Div } from 'react-native-magnus'
import { HeaderIcon } from '../Assets/SVG'

const HeaderLogo = () => {
	return (
		<Div ml={'lg'}>
			<TouchableOpacity>
				<Div h={50} w={50}>
					<HeaderIcon />
				</Div>
			</TouchableOpacity>
		</Div>
	)
}

export default HeaderLogo
