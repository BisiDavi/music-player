import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: (width) => {
    color: 'white',
    borderRadius: '6px',
    width: width;
    height: '26px',
    backgroundColor: '#F7B263',
    border: 'none',
    padding: '4px 15px'
  }
});

interface IButtonProps {
  text: string;
  width: string;
}

const ShadeButton = ({text, width}: IButtonProps): JSX.Element => {
  const classes = useStyles({width});
  return <button className={classes.button}>{text}</button>;
};

export default ShadeButton;
