import createStyles from '@material-ui/styles/createStyles'
import makeStyles from '@material-ui/styles/makeStyles'

const styles = () =>
  createStyles({
    card: {
      marginBottom: 20,
    },
    cardBody: {
      padding: 20,
    },
    button: {
      width: '100%',
    },
  })

export default makeStyles(styles)
