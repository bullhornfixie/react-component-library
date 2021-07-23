import { colors } from '@styles/variables'

const Line = ({color}) => (
    <div
        style={{
            borderTopWidth: 1,
            borderTopStyle: "solid",
            borderTopColor: `${colors.pvBlue}`,
            // borderTopColor: color
        }}
    />
  )

export default Line

// <Line />