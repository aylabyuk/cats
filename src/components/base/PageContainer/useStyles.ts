import createStyles from '@material-ui/styles/createStyles'
import makeStyles from '@material-ui/styles/makeStyles'

const styles = () =>
  createStyles({
    container: {
      padding: '0px 15px',

      '@media (min-width: 576px)': {
        maxWidth: '540px',
      },
      '@media (min-width: 768px)': {
        maxWidth: '720px',
      },
      '@media (min-width: 992px)': {
        maxWidth: '960px',
      },
      '@media (min-width: 1200px)': {
        maxWidth: '1140px',
      },
    },
  })

export default makeStyles(styles)
